const Auth = {
  login(user, pass) {
    if ((user === 'admin' || user === 'ajeetk095@gmail.com') && pass === 'ajeet2025') {
      localStorage.setItem('admin_token', btoa(JSON.stringify({ exp: Date.now() + 7200000 })));
      return { ok: true };
    }
    return { ok: false };
  },
  logout() { localStorage.removeItem('admin_token'); },
  isLoggedIn() { return !!localStorage.getItem('admin_token'); }
};
const DB = {
  get(key) { return JSON.parse(localStorage.getItem('portfolio_'+key)) || PORTFOLIO_DATA[key]; },
  set(key, val) { localStorage.setItem('portfolio_'+key, JSON.stringify(val)); },
  findAll(key) { return this.get(key) || []; },
  create(key, item) { const arr = this.findAll(key); item.id = Date.now(); arr.push(item); this.set(key, arr); return item; },
  update(key, id, data) { const arr = this.findAll(key); const idx = arr.findIndex(i => i.id == id); if(idx >= 0) { arr[idx] = { ...arr[idx], ...data }; this.set(key, arr); return arr[idx]; } return null; },
  delete(key, id) { const arr = this.findAll(key).filter(i => i.id != id); this.set(key, arr); return true; }
};
const AssetManager = {
  async upload(file, meta) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const asset = { id: Date.now(), name: file.name, url: reader.result, type: file.type, ...meta };
        const assets = DB.get('assets') || [];
        assets.push(asset);
        DB.set('assets', assets);
        resolve({ ok: true, asset });
      };
      reader.readAsDataURL(file);
    });
  },
  getAll() { return DB.get('assets') || []; },
  delete(id) { const assets = this.getAll().filter(a => a.id != id); DB.set('assets', assets); }
};
