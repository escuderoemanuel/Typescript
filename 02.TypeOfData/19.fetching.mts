// Fetching de datos con TS
import * as z from "zod";
//! TS no valida en tiempo de ejecución por ello lo pasamos a TypeScript Zod! 

// Api que trae todos los repositorios de javascript
const API_URL = 'https://api.github.com/search/repositories?q=javascript';

// Hacer la petición en el navegador, copiar la respuesta, copiarla en alguna herramienta
// como quicktype, para que tipe los datos y los pegamos aquí
export const DefaultBranchSchema = z.enum([
  "dev",
  "main",
  "master",
]);
export type DefaultBranch = z.infer<typeof DefaultBranchSchema>;


export const LanguageSchema = z.enum([
  "CSS",
  "HTML",
  "JavaScript",
  "Objective-C",
  "TypeScript",
]);
export type Language = z.infer<typeof LanguageSchema>;


export const TypeSchema = z.enum([
  "Organization",
  "User",
]);
export type Type = z.infer<typeof TypeSchema>;


export const VisibilitySchema = z.enum([
  "public",
]);
export type Visibility = z.infer<typeof VisibilitySchema>;

export const LicenseSchema = z.object({
  "key": z.string().optional(),
  "name": z.string().optional(),
  "spdx_id": z.string().optional(),
  "url": z.union([z.null(), z.string()]).optional(),
  "node_id": z.string().optional(),
});
export type License = z.infer<typeof LicenseSchema>;

export const OwnerSchema = z.object({
  "login": z.string().optional(),
  "id": z.number().optional(),
  "node_id": z.string().optional(),
  "avatar_url": z.string().optional(),
  "gravatar_id": z.string().optional(),
  "url": z.string().optional(),
  "html_url": z.string().optional(),
  "followers_url": z.string().optional(),
  "following_url": z.string().optional(),
  "gists_url": z.string().optional(),
  "starred_url": z.string().optional(),
  "subscriptions_url": z.string().optional(),
  "organizations_url": z.string().optional(),
  "repos_url": z.string().optional(),
  "events_url": z.string().optional(),
  "received_events_url": z.string().optional(),
  "type": TypeSchema.optional(),
  "site_admin": z.boolean().optional(),
});
export type Owner = z.infer<typeof OwnerSchema>;

export const ItemSchema = z.object({
  "id": z.number().optional(),
  "node_id": z.string().optional(),
  "name": z.string().optional(),
  "full_name": z.string().optional(),
  "private": z.boolean().optional(),
  "owner": OwnerSchema.optional(),
  "html_url": z.string().optional(),
  "description": z.union([z.null(), z.string()]).optional(),
  "fork": z.boolean().optional(),
  "url": z.string().optional(),
  "forks_url": z.string().optional(),
  "keys_url": z.string().optional(),
  "collaborators_url": z.string().optional(),
  "teams_url": z.string().optional(),
  "hooks_url": z.string().optional(),
  "issue_events_url": z.string().optional(),
  "events_url": z.string().optional(),
  "assignees_url": z.string().optional(),
  "branches_url": z.string().optional(),
  "tags_url": z.string().optional(),
  "blobs_url": z.string().optional(),
  "git_tags_url": z.string().optional(),
  "git_refs_url": z.string().optional(),
  "trees_url": z.string().optional(),
  "statuses_url": z.string().optional(),
  "languages_url": z.string().optional(),
  "stargazers_url": z.string().optional(),
  "contributors_url": z.string().optional(),
  "subscribers_url": z.string().optional(),
  "subscription_url": z.string().optional(),
  "commits_url": z.string().optional(),
  "git_commits_url": z.string().optional(),
  "comments_url": z.string().optional(),
  "issue_comment_url": z.string().optional(),
  "contents_url": z.string().optional(),
  "compare_url": z.string().optional(),
  "merges_url": z.string().optional(),
  "archive_url": z.string().optional(),
  "downloads_url": z.string().optional(),
  "issues_url": z.string().optional(),
  "pulls_url": z.string().optional(),
  "milestones_url": z.string().optional(),
  "notifications_url": z.string().optional(),
  "labels_url": z.string().optional(),
  "releases_url": z.string().optional(),
  "deployments_url": z.string().optional(),
  "created_at": z.coerce.date().optional(),
  "updated_at": z.coerce.date().optional(),
  "pushed_at": z.coerce.date().optional(),
  "git_url": z.string().optional(),
  "ssh_url": z.string().optional(),
  "clone_url": z.string().optional(),
  "svn_url": z.string().optional(),
  "homepage": z.union([z.null(), z.string()]).optional(),
  "size": z.number().optional(),
  "stargazers_count": z.number().optional(),
  "watchers_count": z.number().optional(),
  "language": z.union([LanguageSchema, z.null()]).optional(),
  "has_issues": z.boolean().optional(),
  "has_projects": z.boolean().optional(),
  "has_downloads": z.boolean().optional(),
  "has_wiki": z.boolean().optional(),
  "has_pages": z.boolean().optional(),
  "has_discussions": z.boolean().optional(),
  "forks_count": z.number().optional(),
  "mirror_url": z.null().optional(),
  "archived": z.boolean().optional(),
  "disabled": z.boolean().optional(),
  "open_issues_count": z.number().optional(),
  "license": z.union([LicenseSchema, z.null()]).optional(),
  "allow_forking": z.boolean().optional(),
  "is_template": z.boolean().optional(),
  "web_commit_signoff_required": z.boolean().optional(),
  "topics": z.array(z.string()).optional(),
  "visibility": VisibilitySchema.optional(),
  "forks": z.number().optional(),
  "open_issues": z.number().optional(),
  "watchers": z.number().optional(),
  "default_branch": DefaultBranchSchema.optional(),
  "score": z.number().optional(),
});
export type Item = z.infer<typeof ItemSchema>;

export const GitHubAPIResponseSchema = z.object({
  "total_count": z.number().optional(),
  "incomplete_results": z.boolean().optional(),
  "items": z.array(ItemSchema).optional(),
});

export type GitHubAPIResponse = z.infer<typeof GitHubAPIResponseSchema>;


const response = await fetch(API_URL);
// Para que no dé error con el await se cambia el nombre del archivo a .mjs

if (!response.ok) {
  throw new Error('Error al obtener los datos de respuesta');
}

const data = await response.json() as GitHubAPIResponse;

if (data.items === undefined) {
  throw new Error('Error al obtener los datos de items');
}

data.items.map(repo => {
  return {
    id: repo.id,
    name: repo.name,
    full_name: repo.full_name,
    private: repo.private,
    html_url: repo.html_url,
    description: repo.description,
  }
})