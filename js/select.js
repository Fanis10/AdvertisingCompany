'use strict'

window.addEventListener('DOMContentLoaded', () => {
    console.log('[ DOM loaded! ༼ つ ◕_◕ ༽つ ]')

    custom_select_init() // 1. Init function after load DOM
})



let custom_select_init = () => {
    let selects = document.querySelectorAll('.custom_select') // 2. Function finding all div's with class 'custom_select'
    if (selects.length > 0) {
        selects.forEach(el => {
            custom_select(el)
        })
    }
}

let custom_select = (select) => {
    // create new elements
    let select_selected,
        select_options

    // selected
    select_selected = document.createElement('div')
    select_selected.classList.add('select_selected')
    select_selected.innerHTML = select.querySelector('option').innerHTML
    select.append(select_selected)

    // options
    select_options = document.createElement('div')
    select_options.classList.add('select_options')
    select.append(select_options)

    // create options items
    select.querySelectorAll('option').forEach((el, index) => {
        let val = el.value
        let content = el.innerHTML

        let select_option = document.createElement('div')
        select_option.classList.add('select_option')
        select_option.innerHTML = content
        select_options.append(select_option)

        select_option.addEventListener('click', (e) => {
            [...select_options.querySelectorAll('.select_option')].map(e => e.classList.remove('selected'))
            e.target.classList.add('selected')

            select.querySelector('select').selectedIndex = index
            select_selected.innerHTML = content
        })
    })

    document.addEventListener('click', e => {
        if (e.target.matches('.select_selected')) {
            select.classList.toggle('active')
        } else {
            select.classList.remove('active')
        }
    })
}