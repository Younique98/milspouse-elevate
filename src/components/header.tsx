import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="w-full">
            <div className="bg-blue-900 text-white text-sm py-1">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    An initiative supporting military spouse careers
                </div>
            </div>

            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="flex-shrink-0 flex items-center"

                            >
                                <span className="text-2xl font-bold">
                                 <span className="text-blue-900">MilSouse</span>
                                <span className="text-indigo-600">Elevate</span>   
                                </span>
                            </Link>

                            <div className="hidden md:ml-8 md:flex md:space-x-8">
                                
                                <Link
                                    href="/opportunities"
                                    className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium"
                                >
                                    Find Opportunities
                                </Link>
                                <Link
                                    href="/success-stories"
                                    className="text-gray-900 hover:text-blue-900 px-3 py-2 text-sm font-medium"
                                >
                                    Success Stories
                                </Link>
                                <Link
                                    href="/resources"
                                    className="text-gray-900 hover:text-blue-900 px-3 py-2 text-sm font-medium"
                                >
                                    Resources
                                </Link>
                            </div>
                         </div>
                    </div>
                
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost">
                            Sign In
                        </Button>
                        <Button>
                            Get Started
                        </Button>
                    </div>
                </div>

            </nav>
        </header>
    )
} 