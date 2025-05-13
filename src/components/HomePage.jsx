import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const coachingCenters = [
  {
    institute: "British Kidz - A Play School",
    contact: "8899429888",
    services: ["Day Care Facility", "Play Group", "Nursery", "L.K.G.", "U.K.G."],
    special_evening_batch: {
      features: [
        "Homework & Tuition Support",
        "Nursery to 5th Class Students",
        "Safe & Caring Environment"
      ]
    },
    facilities: [
      "Safe & Loving Day Care",
      "Activity-Based Learning",
      "Homework & Tuition Support",
      "Rhymes, Stories & Games",
      "Personal Attention to Every Child"
    ],
    why_parents_trust_us: [
      "Trained & Caring Teachers",
      "Clean & Child-Friendly Environment",
      "Daily Learning + Fun Activities",
      "Focus on Discipline & Morals"
    ],
    timings: {
      morning: "8:00 AM to 12:00 PM",
      evening: "2:00 PM to 6:00 PM"
    },
    address: "Near Nagar Palika Thakurdwara Road, Teachers Colony, Seohara"
  },
  {
    institute: "Tuition Wala - British Academy",
    contact: "8899429888",
    classes_offered: "1st to 12th (U.P. Board & CBSE)",
    subjects: ["Maths", "Physics", "Chemistry", "Biology", "Commerce", "English"],
    special_batches: ["NEET", "JEE", "English Speaking", "Computer Courses"],
    key_features: [
      "Expert Faculty For All Subject",
      "Free Demo Class",
      "Weekly Tests & Monthly PTM",
      "Individual Attention & Doubt Session"
    ],
    timings: {
      morning: "7:00 AM to 1:00 PM",
      evening: "2:00 PM to 8:00 PM"
    },
    address: "Near Gurudwara, Seohara"
  }
];


const HomePage = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <div className="p-6 grid gap-6 md:grid-cols-2">
        {coachingCenters.map((center, index) => (
          <Card key={index} id={`center-${index}`} className="bg-white shadow-lg border-blue-200 border">
            <CardContent className="p-4">
              <h2 className="text-red-600 text-2xl font-semibold mb-2">{center.institute}</h2>
              <p className="text-sm mb-2 text-gray-700">Contact: {center.contact}</p>
              <p className="mb-1 text-blue-800 font-medium">Address:</p>
              <p className="mb-3 text-gray-600">{center.address}</p>

              {center.services && (
                <>
                  <p className="text-blue-800 font-medium">Services:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-3">
                    {center.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </>
              )}

              {center.subjects && (
                <>
                  <p className="text-blue-800 font-medium">Subjects:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-3">
                    {center.subjects.map((subject, i) => (
                      <li key={i}>{subject}</li>
                    ))}
                  </ul>
                </>
              )}

              <p className="text-blue-800 font-medium">Timings:</p>
              <p className="text-gray-700">Morning: {center.timings.morning}</p>
              <p className="text-gray-700 mb-2">Evening: {center.timings.evening}</p>

              <Button className="bg-red-600 hover:bg-red-700 text-white">Contact Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;