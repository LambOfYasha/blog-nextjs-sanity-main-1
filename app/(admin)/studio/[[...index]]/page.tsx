'use client'

import { Studio } from 'sanity'

import config from '../../../../sanity.config'

export default function StudioPage() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <Studio config={config} />
}