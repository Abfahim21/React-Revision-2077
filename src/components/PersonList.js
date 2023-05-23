import React from 'react'
import Person from './Person'

export default function PersonList() {
    const persons = [
        {
            id: 1,
            name: 'Abrar Fahim',
            age: 28,
            skill: 'React.JS'
        },
        {
            id: 2,
            name: 'Farhan Sarkar',
            age: 28,
            skill: 'Vue.JS'
        },
        {
            id: 3,
            name: 'Nadia Sarkar',
            age: 28,
            skill: 'Angular.JS'
        }
    ]
    const PersonList = persons.map(person =><Person key={person.id} person ={person}/>)
  return (
    <div>
        {PersonList}
    </div>
  )
}
