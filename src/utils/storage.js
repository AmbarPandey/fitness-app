// Save data to localStorage
export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Load data from localStorage
export function loadData(key, defaultValue) {
  const stored = localStorage.getItem(key);

  if (!stored) return defaultValue;

  try {
    return JSON.parse(stored);
  } catch {
    return defaultValue;
  }
}