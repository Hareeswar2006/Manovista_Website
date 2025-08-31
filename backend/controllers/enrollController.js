import path from "path";
import { fileURLToPath } from "url";
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getEnrollmentPage = (req, res) => {
    res.render("enroll");
};

export const submitEnrollment = async (req, res) => {
    const { firstName, lastName, email, phone, service } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone) {
        return res.status(400).json({ message: "Please fill in all required fields." });
    }

    try {
        const { data, error } = await supabase
            .from('enrollments') // Your Supabase table name
            .insert([
                { 
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone: phone,
                    service_name: service // Matches your table column
                },
            ]);

        if (error) {
            console.error("Supabase insertion error:", error);
            return res.status(500).json({ message: "Error submitting enrollment. Please try again later." });
        }

        res.status(200).json({
            message: "Enrollment submitted successfully!",
            data: data,
        });
    } catch (err) {
        console.error("Server error:", err);
        res.status(500).json({ message: "Internal server error." });
    }
};
