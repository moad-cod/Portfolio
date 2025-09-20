import { useState } from 'react'
import {useToast} from '@/hooks/use-toast'
import { Instagram, Linkedin, Twitter,Mail, MapPin, Phone, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
export const ContactSection = () => {
    const {toast} = useToast()
    const [isSubmitting, setisSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setisSubmitting(true);

        setTimeout(() => {
            toast({
                title: 'Message Sent Successfully',
                description: 'We will get back to you soon.',
            });
            setisSubmitting(false);
        }, 1500);
    }
  return (
    <section id='contacts' className='py-24 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Get In <span className='heading-lavender'> Touch</span>
            </h2>

            <p className='text-center text-mted-foreground mb-12 max-w-2xl mx-auto'>
                For any inquiries or collaborations, please don't hesitate to reach out.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl mb-6 font-semibold'>Contact Information </h3>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 heading-lavender'/>
                            </div>
                            <div >
                                <h4 className='font-medium'> Email</h4>
                                <a 
                                    href="mailto:elbaz.ouad1249@gmail.com" 
                                    className='text-muted-foreground hover:heading-lavender transition-colors'
                                >
                                    elbaz.ouad1249@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 heading-lavender'/>
                            </div>
                            <div >
                                <h4 className='font-medium'> Phone</h4>
                                <a 
                                    href="tel:+2120641747116" 
                                    className='text-muted-foreground hover:heading-lavender transition-colors'
                                >
                                    (+212) 0641-747116
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 heading-lavender'/>
                            </div>
                            <div >
                                <h4 className='font-medium'> Location</h4>
                                <a 
                                    href="tel:+2120641747116" 
                                    className='text-muted-foreground hover:heading-lavender transition-colors'
                                >
                                    Agadir, Morocco
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <h4 className='font-medium mb-4'>Connect With Me</h4>
                        <div className='flex space-x-4 justify-center'>
                            <a target="_blank" href="https://www.linkedin.com/in/mouad-elbaz-812537332/">
                                <Linkedin/>
                            </a>
                            <a target="_blank" href="https://x.com/elbaw35026">
                                <Twitter/>
                            </a>
                            <a target="_blank" href="">
                                <Instagram/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl mb-6 font-semibold'>Send a Message</h3>
                    <form action="" className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder='Mouad Elbaz...' 
                                required 
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary'
                            />
                            <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Email</label>
                            <input 
                                type="email" 
                                name="emial" 
                                id="emial" 
                                placeholder='elbaz.ouad1249@gmail.com' 
                                required 
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary'
                            />
                            <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                            <textarea
                                name="Message" 
                                id="Message" 
                                placeholder='Write your message here...' 
                                required 
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none'
                            />
                        </div>
                        <button 
                            typeof='submit' 
                            disabled={isSubmitting}
                            className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"

                            )}
                        >
                            {isSubmitting ? 'Sending Message...' : 'Send Message'}
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}