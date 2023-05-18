import React from "react"
import { Accordion } from '../components/Accordion'

export const AccordionPage = () => {

  const items = [
    {
      id: 1,
      label: 'Dirty code',
      content: "Dirty code is result of inexperience multiplied by tight deadlines, mismanagement, and nasty shortcuts taken during the development process.",
    },
    {
      id: 2,
      label: 'Clean code',
      content: "Clean code is code that is easy to read understand and maintain. Clean code makes software development predictable and increases the quality of a resulting product.",
    },
    {
      id: 3,
      label: 'Code smells',
      content: 'Code smells are indicators of problems that can be addressed during refactoring. Code smells are easy to spot and fix, but they may be just symptoms of a deeper problem with code.',
    }
  ]

  return (
    <Accordion items={items}/>
  )
}