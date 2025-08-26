import  { useState } from 'react'
import MoodInput from '@/components/MoodInput'
import MoodOutput from '@/components/MoodOutput'

const Home = () => {
    const [mood,setMood] = useState('')
    const [subject,setSubject] = useState('')
    const [footer,setFooter] = useState('')
    const [generator, setGenerator] = useState(false)

    const handleGenerate = () => {
        const lowermood = mood.toLowerCase();

        if(lowermood.includes("happy")){
            setSubject("Felling great");
            setFooter("stay awesome");
        }else if(lowermood.includes("sad")){
            setSubject("just another taugh")
            setFooter("sending hugs")
        }else if(lowermood.includes("angry")){
            setSubject("need to cool")
            setFooter("deep breaths")
        }else{
            setSubject("Mood Update")
            setFooter("catch you later")
        }

        setGenerator(true)

        
        
    }

    const handleReset = () => {
       setMood("");
       setSubject("");
       setFooter("");
       setGenerator(false)
    }

  return (
    <div className=' max-w-xl mx-auto shadow-xl p-6 mt-20 rounded-lg bg-white space-y-6'>
        <h2 className=' font-bold text-2xl text-gray-800'>MOODMAIL GENERATOR</h2>
        <MoodInput mood={mood} setMood={setMood} onGenerate={handleGenerate} disabled={generator}/>

        <MoodOutput subject={subject} footer={footer} onReset={handleReset}
        />

    </div>
  )
}

export default Home