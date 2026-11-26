function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  const trimmed = email.trim();
  return trimmed.includes('@') && trimmed.includes('.');
}

module.exports = { isValidEmail };
