import { type SchemaTypeDefinition } from 'sanity'

import { heroType } from './heroType'
import { callCoverageType } from './callCoverageType'
import { testimonialsType } from './testimonialsType'
import { numbersType } from './numbersType'
import { answeringModelsType } from './answeringModelsType'
import { onboardingType } from './onboardingType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroType,
    callCoverageType,
    testimonialsType,
    numbersType,
    answeringModelsType,
    onboardingType,
  ],
}
