export function getAssetPath(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (!path) {
    return '';
  }

  // Image importée avec import xxx from '...'
  if (typeof path === 'object' && path.src) {
    return path.src;
  }

  if (typeof path !== 'string') {
    return '';
  }

  const normalizedPath = path.startsWith('/')
    ? path
    : `/${path}`;

  return `${basePath}${normalizedPath}`;
}