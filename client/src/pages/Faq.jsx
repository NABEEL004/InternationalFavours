import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'

const faqs = [
    {
      question: "What is International Favours?",
      answer: "International Favours is a global platform that connects people from around the world, allowing them to request and fulfill favors for one another. This unique community fosters a spirit of help and collaboration across borders."
    },
    {
      question: "How do I sign up and start using International Favours?",
      answer: "Signing up is easy! Just visit our registration page, fill out the required information, and verify your email address. Once you've created an account, you can start requesting or offering favors."
    },
    {
      question: "What types of favors can I request or offer on International Favours?",
      answer: "You can request or offer any legal, ethical, and reasonably safe favor. This can range from asking for local advice, receiving a postcard, to getting help with a language translation."
    },
    {
      question: "How do I request a favor?",
      answer: "Simply log in to your account, go to the request section, and fill out the form with details about the favor you need. Be as specific as possible to increase your chances of finding someone to help."
    },
    {
      question: "Is there a limit to how many favors I can request or offer?",
      answer: "While there's no strict limit, we encourage users to maintain a balance between requests and offers to keep our community supportive and fair."
    },
    {
      question: "How do I find favors I can help with?",
      answer: "Browse the favor requests on our platform by category or location. If you find one you can assist with, you can directly message the user to offer your help."
    },
    {
      question: "How can I ensure my safety while participating in International Favours?",
      answer: "Always exercise caution and use our messaging system for communication. Avoid sharing personal contact information until you feel confident about the person you're interacting with."
    },
    {
      question: "What should I do if I encounter a problem with another user?",
      answer: "If you face any issues or disputes, please report the user through our platform's reporting feature and contact our support team. We're here to help resolve any conflicts."
    },
    {
      question: "Can I cancel a favor request after posting it?",
      answer: "Yes, you can cancel your request at any time before it's accepted by another user. Simply go to your posted requests and select the cancel option."
    },
    {
      question: "Are there any fees associated with using International Favours?",
      answer: "International Favours is free to join and use. However, certain transactions or premium features might incur minimal fees, which will be clearly indicated."
    },
    {
      question: "How does International Favours protect my privacy?",
      answer: "We take privacy seriously. Your personal information is protected according to our privacy policy, and you have control over what is shared on the platform."
    },
    {
      question: "Can I use International Favours for commercial purposes?",
      answer: "International Favours is intended for personal use and community support. Commercial requests or offers are not allowed unless explicitly approved by our team."
    },
    {
      question: "How can I leave feedback or suggest improvements?",
      answer: "We welcome your feedback and suggestions! Please use the feedback form on our website or contact us directly through our support email."
    },
    {
      question: "What happens if no one responds to my favor request?",
      answer: "If your request doesn't receive a response, consider revising it for clarity or detail. Our community is growing, so keep checking back for new users who might be able to help."
    },
    {
      question: "How can I delete my account?",
      answer: "If you wish to delete your account, please go to your account settings and select the delete account option. Keep in mind that this action is irreversible."
    }
  ];

function highlightText(text, highlight) {
    if (!highlight.trim()) {
      return [<span key="0">{text}</span>];
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
  
    return parts.filter(part => part).map((part, i) => 
      regex.test(part) ? <span key={i} className="bg-yellow-200">{part}</span> : <span key={i}>{part}</span>
    );
  }
  

export default function Faq() {
    const [searchFilter, setSearchFilter] = useState("")
    const [filteredFAQ, setFilteredFAQ] = useState(faqs)

    const handleChange = (e) => {
      const value = e.target.value
      setSearchFilter(value)
      const lowercasedValue = value.toLowerCase();
      const filtered = faqs.filter(faq =>
        faq.question.toLowerCase().includes(lowercasedValue) ||
        faq.answer.toLowerCase().includes(lowercasedValue)
      );
      setFilteredFAQ(filtered);
    }

  return (
    <div className='font-body'>
        <Navbar isIcon={true} current="FAQs"/>
        <div className='flex flex-col justify-center items-center pt-36'>
            <h2 className='font-body font-medium text-5xl '>FAQs</h2>
            <form>
                <input 
                    type="text" 
                    placeholder='Search' 
                    onChange={handleChange}
                    value={searchFilter}
                    className='h-16 w-[28rem] rounded-xl px-5 mt-8 font-body text-lg '
                />
            </form>
            <div className='bg-white flex flex-col gap-3 py-12 px-12 rounded-3xl justify-center items-center w-4/5 my-12'>
                <ul className='list-decimal w-4/5'>
                    {filteredFAQ.length > 0 ? filteredFAQ.map(question => {
                        return (
                            <div key={question.question} className='my-8'>
                                <li  className='font-semibold text-lg mb-2'>{highlightText(question.question, searchFilter)}</li>
                                <p>{highlightText(question.answer, searchFilter)}</p>
                            </div>
                        )}) : "No Relevant QnAs found. Please try another search or contact us at info@internationalfavours.com for any queries."
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
