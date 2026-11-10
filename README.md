# Mind to Move

**Can an EEG-based system reduce wrong commands by refusing to act when it is unsure?**

Mind to Move is a research prototype by team **SynaptiX** for the Dana Foundation / New York Academy of Sciences (NYAS) BrainTech Innovation Challenge. It explores whether a brain-computer interface can decode imagined left-hand and right-hand movement from EEG, and whether a confidence gate can keep uncertain predictions away from a virtual robotic arm.

**Live site:** https://mind-to-move.vercel.app

<!-- Add a screenshot: save it as docs/screenshot.png and uncomment the next line -->
<!-- ![Mind to Move website](docs/screenshot.png) -->

## What the website shows

- **About:** the problem, the data, an interactive step-by-step workflow, our results, and our privacy and ethics design.
- **Demo:** a 3D virtual robotic arm. It replays 225 recorded model predictions through the confidence gate. A switch turns the gate on and off, and a box lets visitors send their own command.
- **Future:** possible next steps and the safety questions they raise.
- **Team:** the five members and their roles.

## How the system works

1. EEG recordings of imagined hand movement from public datasets.
2. Band-pass filter (8 to 30 Hz) and epochs from 1 to 3 seconds after each cue, on three electrodes over the motor cortex (C3, Cz, C4).
3. Common Spatial Patterns extract features.
4. A linear SVM predicts LEFT or RIGHT.
5. Calibrated probabilities give a confidence value.
6. The gate decides: **98% or higher** executes, **91% to below 98%** asks for confirmation, **below 91%** rejects. These thresholds are experimental starting points, not established safety limits.
7. A virtual robotic arm moves only for accepted commands.

## Results

| Test set | People | Trials | Balanced accuracy | Execute | Confirm | Reject |
|---|---|---|---|---|---|---|
| PhysioNet test | 5 | 225 | 53.5% | 0 | 1 | 224 |
| BCI Competition IV 2a (external) | 9 | 1,163 | 63.7% | 0 | 3 | 1,160 |

- Accuracy sits close to chance level. On the PhysioNet test, the 95% interval for accuracy runs from 47.3% to 60.3%.
- The highest confidence on the PhysioNet test was 91.2%, so the gate executed no command automatically.
- A system that sent every prediction to the arm would have moved it the wrong way on 104 of 225 trials. With the gate, no wrong command reached the arm. The gate also rejected 120 of the 121 correct predictions and sent one to confirmation.

## Limits

- Healthy volunteers produced all recordings. The results say nothing about people with paralysis.
- The test group holds five people, and we ran no formal test against chance.
- The model used 35 of the 109 available PhysioNet participants. We also prepared a separate export of all 109 participants. The model did not train on it.
- The demo is a conceptual illustration. It does not establish real-world safety, usability or clinical effectiveness.
- **Mind to Move is not a medical device.** It is not intended for diagnosis, treatment or real-world assistive control.

## Data

We used existing recordings and collected no new EEG from anyone.

- Schalk, G. (2009). *EEG Motor Movement/Imagery Dataset* (version 1.0.0). PhysioNet. https://doi.org/10.13026/C28G6P
- Schalk, G., McFarland, D. J., Hinterberger, T., Birbaumer, N., & Wolpaw, J. R. (2004). BCI2000: A general-purpose brain-computer interface (BCI) system. *IEEE Transactions on Biomedical Engineering*, 51(6), 1034-1043.
- Tangermann, M., et al. (2012). Review of the BCI Competition IV. *Frontiers in Neuroscience*, 6, 55. https://doi.org/10.3389/fnins.2012.00055

## Tech stack

React, Vite, React Router and plain CSS. The 3D arm is a standalone page (`public/arm-3d.html`) that uses Three.js. The site is hosted on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Open the address that Vite prints (usually http://localhost:5173). Build for production with `npm run build`.

## Project structure

```
public/
  arm-3d.html          3D robotic arm demo
  predictions.json     recorded model predictions (225 test trials)
src/
  components/          navbar, workflow, results, perspectives, footer
  data/                text and data for the workflow, team, future page
  pages/               About, Demo, Future, Team
```

The machine-learning code lives outside this repository.
<!-- When Shugyla publishes it, link it here. -->

## Team

| Member | Role |
|---|---|
| Adina Ibraimova | Team lead. Data processing and website |
| Akshara Gupta | System workflow |
| Shugyla Bektas | Machine learning |
| Shreya Shah | Neuroscience, ethics and the 3D arm |
| Hasti Karbalaei Hossein | Security, real-life use and community feedback |

## Acknowledgements

We thank the experts and the student who agreed to be interviewed for this project.