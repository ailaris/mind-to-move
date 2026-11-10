import photo1 from '../assets/team/member1.jpg'
import photo2 from '../assets/team/member2.jpeg'
import photo3 from '../assets/team/member3.jpeg'
import photo4 from '../assets/team/member4.jpeg'
import photo5 from '../assets/team/member5.jpeg'

export const team = [
  {
    name: 'Adina',
    role: 'Team lead',
    area: 'Data processing and website',
    bio: 'Leads the SynaptiX team. Prepared the EEG export of 109 PhysioNet participants, also designed and built this website.',
    photo: photo1,
  },
  {
    name: 'Akshara',
    role: 'Workflow and systems',
    area: 'System workflow and datasets',
    bio: 'Mapped how Mind to Move works from EEG input to the virtual arm and prepared the workflow diagram. Prepared the second dataset and shaped how the website explains the system.',
    photo: photo2,
  },
  {
    name: 'Shugyla',
    role: 'Machine learning',
    area: 'Model training and evaluation',
    bio: 'Built the classifier. Selected and preprocessed the data, trained and calibrated a linear SVM, and tested it on participants the model had never seen.',
    photo: photo3,
  },
  {
    name: 'Shreya',
    role: 'Neuroscience, ethics and 3D design',
    area: 'Research and the 3D arm',
    bio: 'Researched how EEG captures imagined movement and what ethics a brain-computer interface needs. Built the 3D model of the virtual robotic arm.',
    photo: photo4,
  },
  {
    name: 'Hasti',
    role: 'Security and community research',
    area: 'Privacy, real-life use and feedback',
    bio: 'Researched who could use Mind to Move and how, wrote the privacy and cybersecurity analysis, and gathered feedback through interviews.',
    photo: photo5,
  },
]