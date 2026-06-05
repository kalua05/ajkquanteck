// js/ai-chat.js - ENHANCED
const OPENROUTER_KEY = "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";

async function askAI(question) {
  try {
    if (!question?.trim()) return "Ask me something!";
    
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_KEY}`
      },
      body: JSON.stringify({
        model: "nvidia/nemotron-3-super-120b-a12b:free",
        messages: [{
          role: "system",
          content: "You are Ajeet's AI assistant. MSc Financial Engineering, quant researcher. Answer concisely."
        }, {
          role: "user",
          content: question
        }],
        max_tokens: 150
      })
    });
    
    if (!response.ok) throw new Error('API Error');
    const data = await response.json();
    return data.choices?.[0]?.message?.content || "I couldn't process that.";
  } catch (e) {
    console.error('AI error:', e);
    return "Connection error. Try again.";
  }
}
