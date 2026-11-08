export const stages = [
  {
    id: 'next',
    tag: 'Next',
    title: 'Build on the prototype',
    intro: 'These steps extend the work and need more time, data and hardware.',
    items: [
      {
        title: 'More movement commands',
        text: 'Test additional motor imagery classes and check whether the confidence gate still holds back uncertain predictions.',
      },
      {
        title: 'Real-time EEG',
        text: 'Move from prerecorded data to live EEG acquisition and processing. This step needs careful testing and suitable hardware.',
      },
      {
        title: 'More advanced robotic control',
        text: 'Explore more complex arm movements and additional control mechanisms.',
      },
      {
        title: 'Affordable, wearable hardware',
        text: 'Aim for 3 to 9 dry electrodes, a priced parts list, and an adjustable fit that works with different hair types.',
      },
    ],
  },
  {
    id: 'later',
    tag: 'Long term',
    title: 'Possible applications',
    intro: 'Each application below would need substantially more testing, hardware validation, user studies and clinical evaluation. We list them as possibilities.',
    items: [
      {
        title: 'Computer and communication access',
        text: 'Select items, navigate a screen or send simple messages. Eye-tracking and communication devices already serve this need, and Mind to Move would work alongside them.',
      },
      {
        title: 'Smart-home interaction',
        text: 'Switch lights or a television on and off, or adjust the temperature through compatible smart-home devices.',
      },
      {
        title: 'Reaching and holding objects',
        text: 'Help a user reach for a cup or carry a lightweight object with an assistive robotic arm.',
      },
      {
        title: 'Mobility and prosthetics',
        text: 'Investigate robotic prostheses and wheelchair interfaces.',
      },
    ],
  },
]

export const safetyPoints = [
  {
    title: 'The gate holds back or asks',
    text: 'The confidence gate can hold a command back or ask for confirmation. It does not replace a prediction with a different action.',
  },
  {
    title: 'Confirmation uses a separate channel',
    text: 'A button, a blink or a switch should confirm commands, because the same decoder could misread a yes. Which input works best for each user is an open question.',
  },
  {
    title: 'Messages stay kind',
    text: 'The system says "I wasn\'t sure" so users do not blame themselves for errors.',
  },
  {
    title: 'A backup stays available',
    text: 'A future system needs a backup way to call for help.',
  },
]
