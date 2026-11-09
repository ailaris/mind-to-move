// youtubeId: the 11 characters after youtu.be/ or after watch?v=

// After you save the photo in src/assets/ (compress it first), remove the // below:
import cevizPhoto from '../assets/ceviz.jpeg'

export const perspectives = [
  {
    id: 'expert-ertan',
    approved: true,
    kind: 'Expert interview',
    name: 'Dr. Melek Ertan',
    title: 'Neurologist, Eskişehir, Türkiye',
    intro:
      'Dr. Ertan is a neurologist whose areas of practice include EEG, epilepsy and paralysis. We interviewed her in Turkish and translated her answers.',
    note: 'Interview held in Turkish. Translated into English by our team.',
    qa: [
      {
        q: 'We would like to hear your general thoughts about our project.', // type the exact question you asked, or leave empty to show only her answer
        a: 'It is a very good project. There are many more people who need this kind of project. As average life expectancy increases, the number of people experiencing these kinds of problems also increases. It is a project that could greatly improve quality of life.',
      },
      {
        q: 'How would you evaluate our project’s potential to help people with paralysis?',
        a: 'These patients experience reduced physical functioning, struggle to adapt to daily life, and definitely need support. This situation also limits the life of the person who takes care of them to some extent. Therefore, I think that with a device like this, patients could regain their daily independence. Their caregivers could also return to their normal lives.',
      },
    ],
    youtubeId: '',
    photo: null,
    photoAlt: '',
  },
  {
    id: 'expert-ceviz',
    approved: true, 
    kind: 'Expert interview',
    name: 'Dr. Aytekin Ceviz',
    title: 'Neurologist, Eskişehir, Türkiye',
    intro:
      'Dr. Ceviz is a neurologist whose areas of practice include epilepsy, headache and multiple sclerosis. We interviewed him in Turkish and translated his answers.',
    note: 'Interview held in Turkish. Translated into English by our team.',
    qa: [
      // { q: 'Exact question', a: 'His exact answer, translated.' },
    ],
    youtubeId: '',
    photo: cevizPhoto, 
    photoAlt: 'Dr. Aytekin Ceviz with a member of our team',
  },
  {
    id: 'student',
    approved: true,
    kind: 'Community feedback',
    name: 'Çağrı Altın', 
    title: 'A high school student',
    intro: 'We asked a student from outside our team for his view of the project.',
    note: 'Interview held in Turkish. Translated into English by our team.',
    qa: [
      {
        q: 'Do you think this technology could help people with paralysis in the future?',
        a: 'Yes, it can make the daily lives of people with disabilities easier and help them become more independent.',
      },
      {
        q: 'What do you think is the biggest challenge when developing this project?',
        a: 'I think the biggest challenge is detecting brain signals and preventing incorrect commands.',
      },
      {
        q: 'Would you trust a robotic arm controlled by brain signals?',
        a: 'Yes, I would trust it if I was sure that the system was safe and worked accurately.',
      },
      {
        q: 'How do you think this technology could develop in the future?',
        a: 'By detecting brain signals more accurately, robotic arms could be improved and made useful.',
      },
      {
        q: 'Do you think our project is easy to understand? Is there anything we could explain more clearly?',
        a: 'I think the project is very clear. However, you could explain how brain signals control the robotic arm better by including some examples.',
      },
    ],
    youtubeId: '',
    photo: null,
    photoAlt: '',
  },
]