import Pdp from './Pdp'
import renderer from 'react-test-renderer'
//import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('PDP', () => {
  it('renders Pdp unchanged', () => {
    const tree = renderer.create(<Pdp product={PdpProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders 404 with no product', () => {
    const testRenderer = renderer.create(<Pdp product={null} />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType('h3').toBeTruthy)
  })
})

const PdpProps = {
  __typename: 'Product',
  description:
    '{"blocks": [{"data": {"text": "If you\\u2019re looking for biodegradable face wipes, look no further! The convenience of a face wipe meets the luxury of 9 To 5 cream cleanser, with none of the waste. This reusable, biodegradable cleanser and makeup remover feels gentle, while it works hard to clean, balance and clarify your skin."}, "type": "paragraph"}, {"data": {"text": ""}, "type": "paragraph"}, {"data": {"text": "<b>Benefits:</b>"}, "type": "paragraph"}, {"data": {"text": "- Fresh dove orchid infusion is gently yet deeply cleansing on the skin."}, "type": "paragraph"}, {"data": {"text": "- Carrageenan extract is used to thicken and stabilise the product while providing moisture to your skin."}, "type": "paragraph"}, {"data": {"text": "- Ylang ylang oil adds a floral heady scent and balances skin."}, "type": "paragraph"}, {"data": {"text": "- This biodegradable face wipe combines convenience with a conscience. Packaging free and great for travel, this cleanser helps to save unnecessary waste ending up in landfill (or the oceans!)."}, "type": "paragraph"}, {"data": {"text": ""}, "type": "paragraph"}, {"data": {"text": "<b>How to use: </b>"}, "type": "paragraph"}, {"data": {"text": "Simply splash your face with water, wet one side of the pad, and glide over your face to activate a light cleansing cream that can be gently worked into the skin and rinsed away. Remove light eye makeup by sweeping the wet cleansing wipe over your eyelids and rinsing away to gently rub away mascara. Cleansing complete, you can then finish your routine as usual."}, "type": "paragraph"}, {"data": {"text": "Follow with other soothing products such as Angels on Bare Skin fresh cleanser and Celestial facial moisturiser to complete your soothing and softening skincare routine."}, "type": "paragraph"}, {"data": {"text": ""}, "type": "paragraph"}, {"data": {"text": "<b>How to store: </b>"}, "type": "paragraph"}, {"data": {"text": "Store and transport in a soap dish or Lush tin. Keep in a cool and dry place to use again and again."}, "type": "paragraph"}, {"data": {"text": ""}, "type": "paragraph"}, {"data": {"text": "<b>List of ingredients</b>"}, "type": "paragraph"}, {"data": {"text": ""}, "type": "paragraph"}, {"data": {"text": "<s>Fresh Dove Orchid Infusion (Dendrobium), Talc, Glycerine, </s>Sodium Lauroyl Sarcosinate, Propylene Glycol, <s>Ground Cannellini Beans (Phaseolus vulgaris), Carrageenan Extract (Chondrus crispus), Everlasting Flower Absolute (Helichrysum italicum), Ylang Ylang Oil (Cananga odorata), </s>Alpha-Isomethyl ionone, Amyl Cinnamal, Benzyl Alcohol, <s>*Benzyl Benzoate,</s> Butylphenyl Methylpropional, Cinnamyl Alcohol, Citronellol, Geraniol, Hydroxycitronellal, <s>*Linalool,</s> Perfume"}, "type": "paragraph"}, {"data": {"text": ""}, "type": "paragraph"}, {"data": {"text": "<s> \\u2022  Natural Ingredients</s>"}, "type": "paragraph"}, {"data": {"text": " \\u2022  Safe Synthetics"}, "type": "paragraph"}, {"data": {"text": ""}, "type": "paragraph"}, {"data": {"text": "*occurs naturally in essential oils."}, "type": "paragraph"}]}',
  id: 'UHJvZHVjdDoxNzY=',
  name: '7 to 3',
  pricing: {
    __typename: 'ProductPricingInfo',
    priceRange: {
      __typename: 'TaxedMoneyRange',
      start: {
        __typename: 'TaxedMoney',
        gross: {
          __typename: 'Money',
          amount: 2,
          currency: 'GBP',
        },
      },
      stop: {
        __typename: 'TaxedMoney',
        gross: {
          __typename: 'Money',
          amount: 2,
          currency: 'GBP',
        },
      },
    },
  },
  seoTitle: '7 to 3 Cleansing Wipe',
  slug: '7-to-3',
  thumbnail: {
    __typename: 'Image',
    url: 'https://twstg2.eu.saleor.cloud/media/__sized__/products/7_to_3_cleansing_wipe_2020-thumbnail-255x255.png',
  },
}
