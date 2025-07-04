import IndexPage from './IndexPage'
import { usePreview } from '../lib/sanity.preview'
import {
  indexQuery,
  type Post,
  type Settings,
  settingsQuery,
} from '../lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts = usePreview(token, indexQuery) || []
  const settings = usePreview(token, settingsQuery) || ({} as Settings)

  return <IndexPage preview posts={posts as Post[]} settings={settings} />
}
