// Simple EJS helper utilities
exports.formatYear = (d = new Date()) => d.getFullYear();
exports.k = n => new Intl.NumberFormat().format(n);
