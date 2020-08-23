

$(() => {
  
const $numberButton = $('.button.number-button')
const $clearButton = $('#clear-button')
const $equalsButton = $('.button.equals-button')

let num = ''
const clearNum = () => {
    $('#display').empty()
    num = ''
}

$clearButton.on('click', clearNum)

$numberButton.on('click', (event) =>{
    num = num + event.target.id
    $('#display').append(event.target.id)
    return num
})

$equalsButton.on('click', () =>{
    let total = eval(num)
    num = `${total}`
    $('#display').empty()
    $('#display').append(total)
}) 



})