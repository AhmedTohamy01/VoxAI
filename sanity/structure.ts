import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('hero').title('Hero Section'),
      S.documentTypeListItem('callCoverage').title('Call Coverage Section'),
      S.documentTypeListItem('testimonials').title('Testimonials Section'),
      S.documentTypeListItem('numbers').title('Numbers Section'),
      S.documentTypeListItem('answeringModels').title(
        'Answering Models Section'
      ),
      S.documentTypeListItem('onboarding').title('Onboarding Section'),
    ])
