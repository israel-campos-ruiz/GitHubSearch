import { renderHook } from '@testing-library/react-hooks'
import useGet from '../../hooks/useGet'

describe('test in the hook useGet', () => {
    test('should return data success', async () => {
        const {result, waitForNextUpdate } = renderHook( () => useGet('https://api.github.com/repos/israel-campos-ruiz/yogaFront'))
        await waitForNextUpdate()
        const fakeData = {
            id: 333649392,
            node_id: 'MDEwOlJlcG9zaXRvcnkzMzM2NDkzOTI=',
            name: 'yogaFront',
            full_name: 'israel-campos-ruiz/yogaFront',  
            private: false,
            owner: {
              login: 'israel-campos-ruiz',
              id: 47333561,
              node_id: 'MDQ6VXNlcjQ3MzMzNTYx',
              avatar_url: 'https://avatars.githubusercontent.com/u/47333561?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/israel-campos-ruiz',
              html_url: 'https://github.com/israel-campos-ruiz',
              followers_url: 'https://api.github.com/users/israel-campos-ruiz/followers',
              following_url: 'https://api.github.com/users/israel-campos-ruiz/following{/other_user}',
              gists_url: 'https://api.github.com/users/israel-campos-ruiz/gists{/gist_id}',
              starred_url: 'https://api.github.com/users/israel-campos-ruiz/starred{/owner}{/repo}',
              subscriptions_url: 'https://api.github.com/users/israel-campos-ruiz/subscriptions',
              organizations_url: 'https://api.github.com/users/israel-campos-ruiz/orgs',
              repos_url: 'https://api.github.com/users/israel-campos-ruiz/repos',
              events_url: 'https://api.github.com/users/israel-campos-ruiz/events{/privacy}',
              received_events_url: 'https://api.github.com/users/israel-campos-ruiz/received_events',
              type: 'User',
              site_admin: false
            },
            html_url: 'https://github.com/israel-campos-ruiz/yogaFront',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront',
            forks_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/forks',
            keys_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/keys{/key_id}',
            collaborators_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/teams',
            hooks_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/hooks',
            issue_events_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/issues/events{/number}',
            events_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/events',
            assignees_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/assignees{/user}',
            branches_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/branches{/branch}',
            tags_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/tags',
            blobs_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/git/blobs{/sha}',
            git_tags_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/git/tags{/sha}',
            git_refs_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/git/refs{/sha}',
            trees_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/git/trees{/sha}',
            statuses_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/statuses/{sha}',
            languages_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/languages',
            stargazers_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/stargazers',
            contributors_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/contributors',
            subscribers_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/subscribers',
            subscription_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/subscription',
            commits_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/commits{/sha}',
            git_commits_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/git/commits{/sha}',
            comments_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/comments{/number}',
            issue_comment_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/issues/comments{/number}',
            contents_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/contents/{+path}',
            compare_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/merges',
            archive_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/{archive_format}{/ref}',
            downloads_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/downloads',
            issues_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/issues{/number}',
            pulls_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/pulls{/number}',
            milestones_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/milestones{/number}',
            notifications_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/notifications{?since,all,participating}',
            labels_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/labels{/name}',
            releases_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/releases{/id}',
            deployments_url: 'https://api.github.com/repos/israel-campos-ruiz/yogaFront/deployments',
            created_at: '2021-01-28T04:53:18Z',
            updated_at: '2021-01-30T04:23:30Z',
            pushed_at: '2021-01-30T04:23:28Z',
            git_url: 'git://github.com/israel-campos-ruiz/yogaFront.git',
            ssh_url: 'git@github.com:israel-campos-ruiz/yogaFront.git',
            clone_url: 'https://github.com/israel-campos-ruiz/yogaFront.git',
            svn_url: 'https://github.com/israel-campos-ruiz/yogaFront',
            homepage: 'http://israel-campos-ruiz.github.io/yogaFront',
            size: 3631,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'main',
            temp_clone_token: null,
            network_count: 0,
            subscribers_count: 1
          }
        const { data, loading, error } = result.current;
        expect(data).toEqual(fakeData)
        expect(loading).toBe(false)
        expect(error).toBe(null)
          
    })
    
})