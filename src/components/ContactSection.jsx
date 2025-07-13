import { Instagram, Linkedin, Twitter, Facebook, Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true); // Set submitting state to true

        setTimeout(() => { 
            toast ({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            }); 
            setIsSubmitting(false); // Reset submitting state after 1.5 seconds
        }, 1500);
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Get in <span className="text-primary"> Touch </span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                    <Mail className='h-6 w-6 text-primary'/> 
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:ankanmandal73@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>ankanmandal73@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                    <Phone className='h-6 w-6 text-primary'/> 
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+916294514214" className='text-muted-foreground hover:text-primary transition-colors'>+91 6294514214</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                    <MapPin className='h-6 w-6 text-primary'/> 
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>Kolkata, West Bengal, India</a>
                                </div>
                            </div>

                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect with Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href="www.linkedin.com/in/ankan-mandal-10b627359" target='_blank' 
                                    className='hover:text-blue-500 transition-colors duration-300'>
                                    <Linkedin/>
                                </a>
                                <a href="#" target='_blank' className='hover:text-red-500 transition-colors duration-300'>
                                    <Instagram/>
                                </a>
                                <a href="#" target='_blank' className='hover:text-blue-700 transition-colors duration-300'>
                                    <Twitter/>
                                </a>
                                <a href="#" target='_blank' className='hover:text-blue-600 transition-colors duration-300'>
                                    <Facebook/>
                                </a>
                            </div>

                        </div>
                    </div>


                    <div className='bg-card p-8 rounded-lg shadow-xs' onSubmit={handleSubmit}>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form action="" className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium mb-2'>Your Name</label>
                                <input type="text" id='name' name='name' required 
                                    className='w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                                    placeholder='john wick...' />
                            </div>

                            <div>
                                <label htmlFor='email' className='block text-sm font-medium mb-2'>Your Email</label>
                                <input type="email" id='email' name='email' required 
                                    className='w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                                    placeholder='john@gmail.com' />
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium mb-2'>Your Message</label>
                                <textarea id='message' name='message' required 
                                    className='w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' 
                                    placeholder="Hello, I'd like to talk about..." />
                            </div>

                            <button type='submit' disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                )}> {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}