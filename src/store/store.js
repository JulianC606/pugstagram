import { writable } from 'svelte/store'

export const url = writable('https://pugstagram.co')
export const likeCount = writable(0)
