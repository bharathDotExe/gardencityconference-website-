import React, { useEffect, useRef } from 'react';

interface NavItem {
    label: string;
    href: string;
    icon: string;
}

interface FloatingMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (href: string) => void;
    items: NavItem[];
    activeItem: string;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ isOpen, onClose, onNavigate, items, activeItem }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            // Don't close if clicking the menu toggle button itself
            if (target.closest('.menu-toggle-btn')) return;

            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-start justify-end pt-20 md:pt-24 lg:pt-32 px-4 md:px-8 lg:px-10 pointer-events-none">
            <div
                ref={menuRef}
                className="w-full max-w-[320px] glass rounded-3xl shadow-[0_20px_50px_rgba(74,14,14,0.15)] overflow-hidden animate-float-in pointer-events-auto border border-white/40"
            >
                <div className="p-3 md:p-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 gap-2">
                        {items.map((item) => {
                            const isActive = activeItem === item.href;
                            return (
                                <a
                                    key={item.label}
                                    href={`#${item.href}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavigate(item.href); // Call onNavigate for all links
                                        onClose(); // Close the menu
                                    }}
                                    className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${isActive
                                        ? 'bg-primary text-white shadow-md'
                                        : 'hover:bg-primary/5 text-slate-800'
                                        }`}
                                >
                                    <div className={`size-9 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white/10' : 'bg-primary/5 group-hover:bg-primary group-hover:text-white'
                                        }`}>
                                        <span className="material-symbols-outlined text-[20px]">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <span className={`text-[15px] font-bold tracking-tight ${isActive ? 'text-white' : 'text-primary'}`}>
                                        {item.label}
                                    </span>
                                    {isActive && (
                                        <div className="ml-auto size-2 rounded-full bg-accent animate-pulse"></div>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingMenu;
