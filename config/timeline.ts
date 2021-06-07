enum Tag {
  WORK = `work`,
  EDUCATION = `education`,
}
enum Colour {
  workColour = `#736CED`,
  educationColour = `#018f69`,
}

export const TimelineData = [
  {
    text: `Start at my first job which was at Mcdonald's`,
    date: `August 30 2009`,
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Left High School`,
    date: `August 27 2009`,
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
]

export default TimelineData
