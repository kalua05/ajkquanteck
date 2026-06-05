// js/backend.js - IMPROVED VERSION
const Auth = {
  login(user, pass) {
    try {
      if ((user === 'admin' || user === 'ajeetk095@gmail.com') && pass === 'ajeet2025') {
        const token = btoa(JSON.stringify({ exp: Date.now() + 7200000 }));
        localStorage.setItem('admin_token', token);
        return { ok: true };
      }
      return { ok: false };
    } catch (e) {
      console.error('Login error:', e);
      return { ok: false };
    }
  },
  logout() {
    localStorage.removeItem('admin_token');
    return { ok: true };
  },
  isLoggedIn() {
    try {
      const token = localStorage.getItem('admin_token');
      if (!token) return false;
      const data = JSON.parse(atob(token));
      return data.exp > Date.now();
    } catch (e) {
      return false;
    }
  }
};

const DB = {
  get(key) {
    try {
      const stored = localStorage.getItem('portfolio_' + key);
      return stored ? JSON.parse(stored) : (window.PORTFOLIO_DATA?.[key] || null);
    } catch (e) {
      return window.PORTFOLIO_DATA?.[key] || null;
    }
  },
  
  set(key, val) {
    try {
      localStorage.setItem('portfolio_' + key, JSON.stringify(val));
      return { ok: true };
    } catch (e) {
      return { ok: false };
    }
  },
  
  findAll(key) {
    return this.get(key) || [];
  },
  
  create(key, item) {
    try {
      const arr = this.findAll(key);
      item.id = item.id || Date.now().toString();
      arr.push(item);
      this.set(key, arr);
      return { ok: true, item };
    } catch (e) {
      return { ok: false };
    }
  },
  
  update(key, id, data) {
    try {
      const arr = this.findAll(key);
      const idx = arr.findIndex(i => i.id == id);
      if (idx >= 0) {
        arr[idx] = { ...arr[idx], ...data };
        this.set(key, arr);
        return { ok: true };
      }
      return { ok: false };
    } catch (e) {
      return { ok: false };
    }
  },
  
  delete(key, id) {
    try {
      const arr = this.findAll(key).filter(i => i.id != id);
      this.set(key, arr);
      return { ok: true };
    } catch (e) {
      return { ok: false };
    }
  }
};

const AssetManager = {
  async upload(file, meta = {}) {
    return new Promise((resolve, reject) => {
      try {
        if (!file) return reject({ ok: false });
        const reader = new FileReader();
        reader.onload = () => {
          const asset = { 
            id: Date.now().toString(), 
            name: file.name, 
            url: reader.result, 
            type: file.type,
            ...meta 
          };
          const assets = DB.get('assets') || [];
          assets.push(asset);
          DB.set('assets', assets);
          resolve({ ok: true, asset });
        };
        reader.onerror = () => reject({ ok: false });
        reader.readAsDataURL(file);
      } catch (e) {
        reject({ ok: false });
      }
    });
  },
  
  getAll() {
    return DB.get('assets') || [];
  },
  
  delete(id) {
    try {
      const assets = this.getAll().filter(a => a.id != id);
      DB.set('assets', assets);
      return { ok: true };
    } catch (e) {
      return { ok: false };
    }
  }
};
