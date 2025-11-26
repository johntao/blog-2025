/**
 * Tag mapping configuration
 * Maps obscure tag names to more descriptive display names
 */

const tagMappings: Record<string, string> = {
  'b2e': 'backend',
  'f2e': 'frontend',
  'proj': 'project',
  'lotek': 'low-tech',
  'fs': 'fullstack',
  'coll': 'collection',

  'bx': 'browsing-experience',
  'tmi': 'too-much-information',
  'pkm': 'personal-knowledge-management',
  'a11y': 'accessibility',

};

/**
 * Get display name for a tag
 * @param tag - The original tag name
 * @returns The mapped display name or original tag if no mapping exists
 */
export function getDisplayTag(tag: string): string {
  const arr = tag.split(':');
  if (arr.length == 1)
    return tagMappings[tag] || tag;
  else {
    const prefix = tagMappings[arr[0]] || arr[0];
    const suffix = tagMappings[arr[1]] || arr[1];
    return `${prefix}:${suffix}`
  }
}

/**
 * Get display name for a tag prefix
 * @param prefix - The original prefix name
 * @returns The mapped display name or original prefix if no mapping exists
 */
export function getDisplayPrefix(prefix: string): string {
  return tagMappings[prefix] || prefix;
}
