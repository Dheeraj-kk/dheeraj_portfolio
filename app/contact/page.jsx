"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ message: '', type: '' });
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: '', type: '' });

    if (!selectedService) {
      setStatus({ message: '❌ Please select a service.', type: 'error' });
      return;
    }

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log(result.text);
      setStatus({ message: '✅ Message sent successfully!', type: 'success' });

      formRef.current.reset();
      setSelectedService('');
    } catch (error) {
      console.error(error);
      setStatus({ message: '❌ Failed to send message. Please try again.', type: 'error' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, ease: "easeIn", duration: 0.5 }}
      className="min-h-screen flex items-center py-24"
    >
      <div className="container mx-auto flex flex-col xl:flex-row gap-12">
        {/* Left Side */}
        <div className="xl:w-[600px] flex flex-col gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Let’s <span className="text-accent">Connect</span>
            </h2>
            <p className="text-white/70 max-w-md">
              Got an idea, question, or project? Fill out the form and I’ll get
              back to you within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-lg">
              <HiOutlinePhone className="text-accent text-2xl" />
              <span>+91 97962-73902</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <HiOutlineMail className="text-accent text-2xl" />
              <Link
                href="mailto:dheerajbasotra24@gmail.com"
                className="hover:underline text-accent"
              >
                dheerajbasotra24@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <HiOutlineMapPin className="text-accent text-2xl" />
              <span>Chandigarh, India</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, ease: "easeIn", duration: 0.5 }}
          >
            <div className="flex flex-col xl:flex-row gap-6">
              <div className="w-full">
                <Label htmlFor="firstname">
                  First Name <span className="text-accent">*</span>
                </Label>
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div className="w-full">
                <Label htmlFor="lastname">
                  Last Name <span className="text-accent">*</span>
                </Label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Your last name"
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <Label htmlFor="email">
                Email <span className="text-accent">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="w-full">
              <Label htmlFor="service">
                I'm interested in <span className="text-accent">*</span>
              </Label>
              <Select
                name="service"
                value={selectedService}
                onValueChange={setSelectedService}
                required
              >
                <SelectTrigger className="w-full !h-12 bg-white/5 border-white/10 px-4">
                  <SelectValue placeholder="Choose here" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="webdev">Web Development</SelectItem>
                  <SelectItem value="web3">Web3 Marketing</SelectItem>
                  <SelectItem value="seo">SEO</SelectItem>
                  <SelectItem value="branding">Brand Site</SelectItem>
                  <SelectItem value="consult">Consultation</SelectItem>
                  <SelectItem value="casual">Casual Talk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Label htmlFor="msg">
                Message <span className="text-accent">*</span>
              </Label>
              <Textarea
                id="msg"
                name="msg"
                placeholder="Write your message here..."
                required
                className="min-h-[160px] bg-white/10 p-4 placeholder:text-white/50"
              />
            </div>

            {status.message && (
              <div
                className={`text-sm mt-2 ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </div>
            )}

            <motion.button
              type="submit"
              className="btn btn-lg btn-accent mt-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">Send Message</span>
                <HiOutlineArrowLongRight className="text-xl" />
              </div>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
