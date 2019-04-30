import Test from '../support/utils'
import Lanche from '../lanche/lanche'

const total1 = Lanche.comprarLanches([1])
const total2 = Lanche.comprarLanches([3,2,1])

const test1 = Test({
  name: 'Testa compra',
  expect: 1.5,
  value: total1
})

const test2 = Test({
  name: 'Testa compra',
  expect: 10.84,
  value: total2
})

test1.dump()
test2.dump()