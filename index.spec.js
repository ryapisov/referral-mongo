const mongoose = require('mongoose')

const {
  createReferal,
  getReferrals,
  updateReferal,
  deleteReferral
} = require('./lib/api')



describe('createReferal function:', ()=>{

  test('', async()=>{
    const user = await createReferal(29)
    return user
  })
})
describe('getReferrals function:', ()=>{

  test('', async()=>{
  //  const user = await getReferrals(2)
  //  return user
  })
})
describe('updateReferal function:', ()=>{

  test('', async()=>{
  //  const user = await updateReferal(2)
  //  return user
  })
})
describe('deleteReferral function:', ()=>{

  test('', async()=>{
  //  const user = await deleteReferral(2)
  //  return user
  })
})



//
// function main(){
//   return undefined
// }
//
// describe('Sum function:', ()=>{
//
//   let example //типа глобальная переменная
//
//   beforeEach(()=>{})//вызывается перед каждым тестом
//   beforeAll(()=>{})//запустится один раз перед всеми
//   afterEach(()=>{})//запустится после каждого теста
//   afterAll(()=>{})//запустится один раз после всех
//
//
//
//
//   //mock
//   function map(){}
//   let fn
//   beforeEach(()=>{
//     array = [1,2,3,4]
//     fn = jest.fn(x=>x**2)
//   })
//   test('', ()=>{
//     map(array, fn)
//     expect(fn).toBeColled()
//     expect(fn).toBeColledTimes(4)// сколько раз колбэк должен быть вызван
//   })
//
//
//   test('should return sum of two values',()=>{
//     expect().toBe()
//     expect().toBeInstanceOf(Error) // инстанс ошибки
//     try{
//       await Ajax.echo()
//     }catch(e){
//       expect(e.message).toBe('error')
//     }
//     expect(null).toBeNull() // должен быть null
//     expect(undefined).toBeFalsy() // undefined, null, 0, ''
//     expect(null).toBeDefined() //определено кроме undefined
//     expect(false).not.toBeTruthy()//противоположность falsy
//     expect(main()).toBeUndefined()//определено как undefined
//   })
//
//
// })
//
//
//
// test('Sum should return sum of two values',()=>{
//   expect().toBe()//должно быть
//   expect().toEqual() //равный, массивы, объекты
//   expect(1).toBeGreaterThan(0)//должено быть больше чем
//   expect(1).toBeGreaterThanOrEqual(1)//должено быть больше или равен чем
//   expect(0).toBeLessThan(1)//должено быть меньше чем
//   expect(5).toBeGreaterThanOrEqual(5)//должено быть больше или равен чем
//
//   expect(0.3).toBeCloseTo(0.3)//должен быть близок (защита от 0.300000000000000004)
//   expect([]).toContain()//не должен содержать в массиве либо в объекте значение
// })
