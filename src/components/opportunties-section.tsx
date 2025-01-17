import React from 'react';
import { Briefcase, BookOpen, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const OpportunitiesSection = () => { 
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Explore Opportunities 
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Find the perfect opportunity for you and your family
                    </p>
                </div>
                {/* TODO : Add Program Types and clean this up by moving to a separate data file (ET) */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                        title: " Internships",
                        description: "Gain hands-on experirence in your desired field with our partner companies",
                        icon: <Briefcase className="h-6 w-6 text-blue-900" />,
                    },
                        {
                        title: " Training Programs",
                        description: "Develop new skills with specialized training and certification programs",
                        icon: <BookOpen className="h-6 w-6 text-blue-900" />,
                    },
                        {
                        title: "Apprenticeships",
                        description: "Learn while you earn with structured apprenticeship opportunities",
                        icon: <Users className="h-6 w-6 text-blue-900" />,
                    }
                    ].map( ( program, index ) => ( 
                        <Card key={index} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        {program.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                                        <p className="mt-2 text-gray-600">{program.description}</p>
                                    </div>
                                </div>
                            
                            </CardContent>

                        </Card> )
                    )}
                </div>

                {/* TODO (ET) : Cleanup and Remove placeholder text to data file but later make dynamic */}
                {/* Featured Opportunities */}

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Opportunties</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                            title: "Remote Project Manager", 
                            company: "Tech Solutions Inc.",
                            location: "Remote / Anywhere",
                            type: "Full-Time",
                            posted: "2 days ago",
                        },
                            {
                            title: "Healthcare Administrator", 
                            company: "National Health Services",
                            location: "Multiple Locations",
                            type: "Full-Time",
                            posted: "3 days ago",
                        },
                            {
                            title: "Digital Marketing Specialist", 
                            company: "Global Media Group",
                            location: "Remote / Anywhere",
                            type: "Contract",
                            posted: "1 day ago",
                        }
                        ].map( ( opportunity, index ) => (
                            <Card key={index} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-3 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                                {opportunity.type}
                                            </span>
                                        <span className="text-gray-500 text-sm">{opportunity.posted}</span>
                                        </div>
                                        <h4 className="text-lg font-semi-bold text-gray-900 mb-2">{opportunity.title}</h4>
                                        <p className="text-gray-600 mb-4">{opportunity.company}</p>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            {opportunity.location}
                                        </div>
                                    </div>
                                    <div className="px-6 py-4 bg-gray-50 border-t">
                                        <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                        }
                    </div>
                </div>
        </div>
        </div>
    )
}