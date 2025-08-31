import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getContact = (req, res) => {
  res.render("contact");
};

export const submitContact = async (req, res) => {
    const { firstName, email, phone, location, message } = req.body;

    if (!firstName || !email || !phone) {
        return res.status(400).json({ message: "Please fill in all required fields: First Name, Email, and Phone." });
    }

    try {
        const { data, error } = await supabase
            .from('contact_inquiries')
            .insert([
                {
                    first_name: firstName,
                    email: email,
                    phone: phone,
                    location: location,
                    message: message,
                },
            ]);

        if (error) {
            console.error("Supabase insertion error for contact form:", error);
            return res.status(500).json({ message: "Error submitting contact form. Please try again later." });
        }

        res.status(200).json({
            message: "Contact inquiry submitted successfully!",
            data: data,
        });
    } catch (err) {
        console.error("Server error submitting contact form:", err);
        res.status(500).json({ message: "Internal server error." });
    }
};
