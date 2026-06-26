/**
 * Mininal cn utility — merges class names with truthy filtering.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
