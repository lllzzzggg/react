export const Increment='increment'
export const Decrement='decrement'
export const ChangeInput='changeInput'
export const DecrementSlow = 'decrementSlow'

export const increment=(counterCaption)=>({
    type:Increment,
    counterCaption
})
export const decrement=(counterCaption)=>({
    type:Decrement,
    counterCaption
})
export const decrementSlow=(counterCaption)=>({
    type:DecrementSlow,
    counterCaption
})
export const changeInput=(counterCaption,value)=>({
    type:ChangeInput,
    counterCaption,
    value
})