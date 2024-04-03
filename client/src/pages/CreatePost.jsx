import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import {FormField, Loader} from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading,setLoading]=useState(false);

  const handleSubmit = ()=>{

  }

  const handleChange = (e)=>{

  }

  return (
    <section className='max-w-7xl mx-auto'>
    <div className='font-extrabold text-[#222328] text-[32px]'>
    <h1>Create</h1>
    <p className="mt-2 text-[#666e75] text-[14px] max-w-[700px]">
Create imaginative and visually stunning images through DALL-E AI and share with the community
    </p>
    </div>


    </section>
  )
}

export default CreatePost