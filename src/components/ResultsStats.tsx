import React, { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

interface StatCard {
    icon: React.ElementType;
    value: number;
    prefix?: string;
    suffix: string;
    label: string;
    description: string;
    color: string;
}

const stats: StatCard[] = [
    {
        icon: Users,
        value: 1000,
        suffix: "+",
        label: "Total Leads Generated",
        description: "Across all campaigns",
        color: "from-primary to-secondary",
    },
    {
        icon: DollarSign,
        value: 50,
        prefix: "₹",
        suffix: "",
        label: "Average Cost Per Lead",
        description: "Optimized for efficiency",
        color: "from-secondary to-accent",
    },
    {
        icon: Target,
        value: 500000,
        prefix: "₹",
        suffix: "+",
        label: "Total Ad Spend Managed",
        description: "Campaign optimization",
        color: "from-accent to-primary",
    },
    {
        icon: TrendingUp,
        value: 3,
        suffix: "x",
        label: "ROI Multiplier",
        description: "Average return on investment",
        color: "from-primary via-secondary to-accent",
    },
];

const campaignHighlights = [
    {
        campaign: "2BHK Dindoli Campaign",
        leads: 68,
        costPerLead: "₹50.92",
        spend: "₹3,462.75",
        impressions: "39,064",
        reach: "17,448",
    },
    {
        campaign: "Plot Campaigns",
        leads: 93,
        costPerLead: "₹118.45",
        spend: "₹11,016.11",
        impressions: "119,039",
        reach: "64,940",
    },
    {
        campaign: "Office Space Campaigns",
        leads: 54,
        costPerLead: "₹167.28",
        spend: "₹9,033.18",
        impressions: "173,077",
        reach: "118,791",
    },
    {
        campaign: "Meta Leads Campaign",
        leads: 488,
        costPerLead: "₹199.71",
        spend: "₹97,458.33",
        impressions: "332,782",
        reach: "134,896",
    },
];

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span ref={ref} className="inline-block">
            {prefix}
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}

export function ResultsStats() {
    return (
        <div className="space-y-16">
            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group">
                        <div className="h-full p-6 transition-all duration-300 border rounded-2xl bg-surface/30 border-white/10 hover:border-primary/30 backdrop-blur-sm">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className={`text-3xl md:text-4xl font-bold font-display mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <p className="mb-1 text-lg font-semibold text-white">{stat.label}</p>
                            <p className="text-sm text-text-muted">{stat.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

