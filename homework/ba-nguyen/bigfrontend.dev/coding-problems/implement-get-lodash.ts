function get(source, path, defaultValue = undefined) {
  const newPath = Array.isArray(path)
    ? path
    : path.replace(/\[/, ".").replace(/\]/, "").split(".");
  const newSource = source[newPath[0]];

  if (newSource && newPath.length > 1) {
    return get(newSource, newPath.slice(1), defaultValue);
  }

  return newSource === undefined ? defaultValue : newSource;
}
