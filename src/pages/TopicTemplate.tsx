
import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/ui/layout";
import TopicHero from "@/components/topic-hero";
import ResourceCard from "@/components/resource-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Shield, User, Leaf, Gavel, BarChart2, Calendar, ArrowDownWideNarrow, Handshake, Layers, BrainCircuit } from "lucide-react";

const keyTopicExplanationsSimple: Record<string, string[]> = {
  "teams": [
    "Every team goes through stages—forming, storming, norming, performing—each with distinct challenges and opportunities.",
    "When team members feel safe to share ideas without judgement, collaboration and trust blossom.",
    "Disagreements are natural; resolving them positively helps teams grow and avoid bigger issues.",
    "Sharing tasks allows everyone to shine and ensures project workloads are manageable.",
    "Open, honest communication keeps everyone on track and reduces misunderstandings.",
    "Remote work or distributed teams require extra planning for meetings and clear digital communication."
  ],
  "risk": [
    "Seek out what could go wrong by listing possible threats early on.",
    "Judge how likely and how serious each risk is—some may be rare but have big consequences.",
    "Prepare simple plans to dodge, reduce, or accept each risk before they become problems.",
    "Check on risks regularly and update your plans as the project evolves.",
    "A risk register is a simple table to track risks, actions, and owners.",
    "Let everyone involved know about risks and how you’re handling them to keep surprises to a minimum."
  ],
  "leadership": [
    "Managing is about tasks, but leadership is about inspiring and guiding people toward success.",
    "Adapt your style—sometimes firm direction is needed, sometimes a gentle nudge works best.",
    "Uncertainty is normal—lead confidently and keep your team steady through change.",
    "Use simple frameworks or checklists to make decisions, especially under time pressure.",
    "You don’t need a big title to influence others—build trust and be clear about your vision.",
    "Act with honesty and consistency; people follow leaders who are trustworthy and reliable."
  ],
  "ethics": [
    "Leading by example means making choices that are fair and honest at every stage.",
    "Find a balance between competing needs so all parties are respected.",
    "Be open about your actions, and take responsibility when things don't go as planned.",
    "Choose suppliers and partners based not just on price but also on their ethical standards.",
    "When faced with a tough choice, use a step-by-step process to find the best solution.",
    "Consider the impact your project has on the wider community, not just on your team."
  ],
  "sustainability": [
    "Projects can help people, the environment, and your bottom line—you don’t have to choose just one.",
    "Buy goods and services from sources that also care about being eco-friendly and fair.",
    "Track and report on the good (and not-so-good) your project produces for people and the planet.",
    "Small changes, like reducing waste, add up over time toward greener project management.",
    "Invite everyone—staff, volunteers, community—to help build in sustainability from the start.",
    "Think ahead: Will your project keep having a positive impact once it’s finished?"
  ],
  "governance": [
    "Governance is about making sure projects stay on the right track and follow agreed rules.",
    "Even small organizations benefit from clear, simple decision-making structures.",
    "Use written processes for decisions and approvals so nothing falls through the cracks.",
    "Check progress regularly and report honestly to those overseeing the project.",
    "Knowing who does what avoids confusion and finger-pointing.",
    "Stay legal by keeping up with regulations and documenting key project steps."
  ],
  "strategy": [
    "Tie every project back to the big goals of your business or charity.",
    "Pick projects that make the best use of what you have and are likely to succeed.",
    "If you run several projects, look for ways they support each other.",
    "Use resources where they have the most benefit—know what's essential versus nice-to-have.",
    "Regularly check if your projects are moving you closer to your strategic objectives.",
    "Plan for and track the actual benefits realized, not just the activities completed."
  ],
  "planning": [
    "Be clear about what your project will (and won’t) deliver, and stick to it.",
    "Break big goals into smaller, manageable tasks to make progress easier.",
    "Build timelines that are realistic, including buffers for the unexpected.",
    "Plan out what people, tools, or materials you’ll need—especially if resources are tight.",
    "Create budgets that show not only costs but also how you’ll stay within your means.",
    "Flexibility lets you adapt to changes instead of being stalled by them."
  ],
  "implementation": [
    "Turn your plans into action by breaking them down into small, doable steps.",
    "Track if you’re on schedule using regular check-ins and simple status updates.",
    "Tackle obstacles as soon as they pop up to avoid delays.",
    "Let everyone know about changes as soon as possible to keep alignment.",
    "Check your work as you go so you don't have to fix big mistakes later.",
    "Use simple measures, like checklists or metrics, to see if work is on track."
  ],
  "stakeholders": [
    "Make a list of everyone who cares about, or is affected by, your project.",
    "A basic plan for talking to stakeholders prevents last-minute surprises or complaints.",
    "Reach out clearly and regularly so people stay informed and engaged.",
    "Set goals early, and adjust as things change so expectations stay realistic.",
    "Bring key supporters close—they can help you solve problems faster.",
    "Deal with disagreements quickly and fairly so they don’t derail your project."
  ],
  "methodologies": [
    "Traditional methods plan everything up front; agile ones adapt as you go.",
    "Waterfall is step-by-step; best for projects with clear, unchanging needs.",
    "Scrum and Kanban allow teams to adjust quickly and deliver in small chunks.",
    "Mixing methods can help you get the best of both worlds.",
    "Choose the method that fits your resources, team skills, and project goals.",
    "Bigger organizations need more formal process; small teams work best with light but clear structure."
  ],
  "ai": [
    "Free and easy-to-use AI tools can automate tasks like setting up timelines or reminders.",
    "AI helps you see patterns in data so you can predict problems before they happen.",
    "Let a computer handle repetitive admin work—freeing up your team for important decisions.",
    "AI can help you assign the right people or resources to the right jobs automatically.",
    "Writing reports and notes can be faster—AI can tidy up or summarize your documents.",
    "Plenty of user-friendly AI tools are out there, even for organizations without much IT support."
  ]
};

const topicData: Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  introduction: string;
  keyPoints: string[];
  resources: {
    title: string;
    description: string;
    type: "video" | "audio" | "text" | "book";
    link: string;
    tags: string[];
  }[];
}> = {
  "teams": {
    title: "Teams",
    description: "Building and managing effective project teams",
    icon: Users,
    introduction: "Effective project teams are the foundation of successful project delivery. This section explores how to build, develop, and lead high-performing teams in small businesses and charity settings.",
    keyPoints: [
      "Team formation and development stages",
      "Building trust and psychological safety",
      "Managing team dynamics and conflict resolution",
      "Effective delegation and empowerment",
      "Team communication strategies",
      "Managing virtual and distributed teams"
    ],
    resources: [
      {
        title: "The Five Dysfunctions of a Team Framework",
        description: "An overview of Patrick Lencioni's model for understanding team dynamics and addressing common issues.",
        type: "text",
        link: "https://www.tablegroup.com/topics/teamwork/",
        tags: ["Team building", "Leadership", "Communication"]
      },
      {
        title: "Building Trust in Small Project Teams",
        description: "Practical approaches to establishing trust when resources and time are limited.",
        type: "video",
        link: "https://www.youtube.com/watch?v=lencw2DTb0c",
        tags: ["Trust building", "Team dynamics", "Small teams"]
      },
      {
        title: "Managing Volunteer Teams in Charity Projects",
        description: "Strategies for leading and motivating volunteer team members in charitable organizations.",
        type: "audio",
        link: "https://www.manager-tools.com/2021/11/volunteer-management-basics-part-1",
        tags: ["Volunteer management", "Motivation", "Charities"]
      }
    ]
  },
  "risk": {
    title: "Risk",
    description: "Identifying and mitigating project risks",
    icon: Shield,
    introduction: "Risk management is vital for project success, especially for small organizations with limited resources. This section provides practical approaches to identifying, assessing, and mitigating project risks.",
    keyPoints: [
      "Risk identification techniques",
      "Qualitative and quantitative risk analysis",
      "Developing risk response strategies",
      "Risk monitoring and control",
      "Creating simple risk registers for small projects",
      "Risk communication with stakeholders"
    ],
    resources: [
      {
        title: "Simplified Risk Management for Small Organizations",
        description: "A streamlined approach to risk management suited to organizations with limited resources.",
        type: "text",
        link: "https://www.simplilearn.com/simple-risk-management-guide-article",
        tags: ["Risk assessment", "Small business", "Practical guides"]
      },
      {
        title: "Risk Response Strategies Explained",
        description: "A detailed explanation of the various strategies for responding to identified project risks.",
        type: "video",
        link: "https://www.youtube.com/watch?v=KSw6jRrlICQ",
        tags: ["Risk response", "Mitigation strategies", "Planning"]
      },
      {
        title: "Risk Management for Charitable Projects",
        description: "Special considerations for managing risk in charity contexts with volunteer teams.",
        type: "book",
        link: "https://www.amazon.com/Managing-Project-Risks-Small-Charities/dp/1786436442",
        tags: ["Charity sector", "Volunteer projects", "Nonprofit"]
      }
    ]
  },
  "leadership": {
    title: "Leadership",
    description: "Developing project leadership skills",
    icon: User,
    introduction: "Leadership is crucial for guiding projects to successful outcomes. This section covers the leadership skills required to inspire teams, make decisions, and navigate challenges in project contexts.",
    keyPoints: [
      "Project leadership vs. project management",
      "Situational leadership in project contexts",
      "Leading through change and uncertainty",
      "Decision-making frameworks",
      "Influencing without authority",
      "Developing leadership presence"
    ],
    resources: [
      {
        title: "Leadership Skills for Project Managers",
        description: "Core leadership competencies needed to successfully guide projects from initiation to closure.",
        type: "text",
        link: "https://www.cio.com/article/222665/project-management-project-management-leadership-skills.html",
        tags: ["Leadership skills", "Project management", "Personal development"]
      },
      {
        title: "Influencing Without Authority",
        description: "Techniques for leading projects when you don't have direct authority over all team members or stakeholders.",
        type: "video",
        link: "https://www.youtube.com/watch?v=esQYEmD0Bm0",
        tags: ["Influence", "Stakeholder management", "Communication"]
      },
      {
        title: "Leading Small Business Projects",
        description: "Leadership approaches tailored to the unique challenges of small business project environments.",
        type: "audio",
        link: "https://hbr.org/podcast/2020/01/leading-small-teams",
        tags: ["Small business", "Team leadership", "Resource constraints"]
      }
    ]
  },
  "ethics": {
    title: "Ethics",
    description: "Ethical considerations in project management",
    icon: Gavel,
    introduction: "Ethical decision-making is essential in project management. This section explores ethical frameworks and considerations that should guide project decisions and actions.",
    keyPoints: [
      "Ethical leadership in projects",
      "Balancing stakeholder interests",
      "Transparency and accountability",
      "Ethical procurement and vendor relationships",
      "Managing ethical dilemmas",
      "Social responsibility in projects"
    ],
    resources: [
      {
        title: "Ethical Decision-Making Framework for Projects",
        description: "A step-by-step approach to making ethical decisions when faced with complex project situations.",
        type: "text",
        link: "https://www.projectmanager.com/blog/ethical-decision-making",
        tags: ["Decision-making", "Ethics", "Leadership"]
      },
      {
        title: "Ethics in Charity Project Management",
        description: "Special ethical considerations when managing projects in charitable organizations.",
        type: "video",
        link: "https://www.youtube.com/watch?v=WDxNA4h7L6Y",
        tags: ["Charity sector", "Governance", "Accountability"]
      },
      {
        title: "Ethical Stakeholder Management",
        description: "How to manage stakeholder relationships with integrity and ethical consideration.",
        type: "audio",
        link: "https://hbr.org/podcast/2019/11/ethical-leadership",
        tags: ["Stakeholders", "Communication", "Relationships"]
      }
    ]
  },
  "sustainability": {
    title: "Sustainability",
    description: "Building sustainable project practices",
    icon: Leaf,
    introduction: "Integrating sustainability into project management practices has become increasingly important. This section provides guidance on incorporating environmental, social, and economic sustainability considerations into projects.",
    keyPoints: [
      "Triple bottom line in project management",
      "Sustainable procurement practices",
      "Measuring sustainability impact",
      "Green project management methodologies",
      "Engaging stakeholders in sustainability initiatives",
      "Long-term project sustainability planning"
    ],
    resources: [
      {
        title: "Sustainable Project Management: A Guide for Small Organizations",
        description: "Practical approaches to incorporating sustainability without overwhelming project resources.",
        type: "text",
        link: "https://www.greenprojectmanagement.org/resources",
        tags: ["Sustainability", "Green practices", "Small business"]
      },
      {
        title: "Measuring Your Project's Environmental Impact",
        description: "Simple methods for assessing and reducing the environmental footprint of your projects.",
        type: "video",
        link: "https://www.youtube.com/watch?v=gTamnlXbgqc",
        tags: ["Environmental impact", "Measurement", "Reporting"]
      },
      {
        title: "Social Sustainability in Project Management",
        description: "How to ensure your projects contribute positively to social outcomes.",
        type: "book",
        link: "https://www.amazon.com/Sustainable-Project-Management-Principles-Practice/dp/1138737135",
        tags: ["Social impact", "Community engagement", "ESG"]
      }
    ]
  },
  "governance": {
    title: "Governance",
    description: "Project governance frameworks and implementation",
    icon: Gavel,
    introduction: "Good governance ensures projects are aligned with organizational objectives and executed with proper oversight. This section explores governance frameworks appropriate for small businesses and charities.",
    keyPoints: [
      "Project governance fundamentals",
      "Creating lightweight governance structures",
      "Decision-making and approval processes",
      "Project oversight and reporting",
      "Roles and responsibilities in governance",
      "Regulatory compliance in projects"
    ],
    resources: [
      {
        title: "Simplified Project Governance for Small Organizations",
        description: "How to implement effective governance without bureaucratic overhead.",
        type: "text",
        link: "https://www.pmi.org/learning/library/project-governance-framework-9654",
        tags: ["Governance", "Small business", "Best practices"]
      },
      {
        title: "Setting Up a Project Board for Charity Projects",
        description: "How to establish and operate an effective project board in a charitable context.",
        type: "video",
        link: "https://www.youtube.com/watch?v=JKNcCiIH0iQ",
        tags: ["Project boards", "Charity sector", "Oversight"]
      },
      {
        title: "Governance Essentials for Project Success",
        description: "The fundamental governance elements that every project needs to succeed.",
        type: "audio",
        link: "https://hbr.org/podcast/2020/09/project-governance",
        tags: ["Essentials", "Success factors", "Implementation"]
      }
    ]
  },
  "strategy": {
    title: "Strategy",
    description: "Strategic approaches to project management",
    icon: BarChart2,
    introduction: "Strategic project management ensures projects align with and contribute to organizational goals. This section covers approaches to strategic project selection, alignment, and portfolio management.",
    keyPoints: [
      "Aligning projects with organizational strategy",
      "Project selection and prioritization",
      "Portfolio management for small organizations",
      "Strategic resource allocation",
      "Measuring strategic impact of projects",
      "Benefits realization management"
    ],
    resources: [
      {
        title: "Strategic Project Selection Toolkit",
        description: "Tools and templates for choosing the right projects that align with your organization's strategy.",
        type: "text",
        link: "https://www.smartsheet.com/strategic-project-selection",
        tags: ["Project selection", "Decision-making", "Prioritization"]
      },
      {
        title: "Portfolio Management for Small Businesses",
        description: "How to manage multiple projects strategically with limited resources.",
        type: "video",
        link: "https://www.youtube.com/watch?v=RZzuwSz_vE0",
        tags: ["Portfolio management", "Small business", "Resource allocation"]
      },
      {
        title: "Measuring Project Strategic Success",
        description: "Methods for evaluating how well your projects deliver strategic value.",
        type: "book",
        link: "https://www.amazon.com/Strategy-Implementation-Project-Management-Approach/dp/1138739405",
        tags: ["Measurement", "Strategic alignment", "Benefits realization"]
      }
    ]
  },
  "planning": {
    title: "Planning",
    description: "Effective project planning techniques",
    icon: Calendar,
    introduction: "Good planning sets the foundation for project success. This section provides practical techniques and tools for effective project planning in resource-constrained environments.",
    keyPoints: [
      "Scope definition and management",
      "Work breakdown structures",
      "Schedule development",
      "Resource planning for small teams",
      "Budget planning with limited resources",
      "Planning for uncertainty"
    ],
    resources: [
      {
        title: "Practical Project Planning for Small Teams",
        description: "Streamlined planning approaches that work well for small project teams.",
        type: "text",
        link: "https://www.projectmanagement.com/articles/simple-planning-for-small-teams",
        tags: ["Planning", "Small teams", "Practical guides"]
      },
      {
        title: "Creating Effective Work Breakdown Structures",
        description: "Step-by-step guide to developing WBS that enhances project planning and execution.",
        type: "video",
        link: "https://www.youtube.com/watch?v=CW_8SFBGl6s",
        tags: ["WBS", "Scope management", "Planning tools"]
      },
      {
        title: "Resource Planning for Charity Projects",
        description: "How to plan for and optimize limited resources in charitable organizations.",
        type: "audio",
        link: "https://hbr.org/podcast/2020/12/optimizing-limited-resources",
        tags: ["Resource planning", "Charity sector", "Optimization"]
      }
    ]
  },
  "implementation": {
    title: "Implementation",
    description: "Successfully implementing project plans",
    icon: ArrowDownWideNarrow,
    introduction: "Implementation turns plans into reality. This section focuses on techniques for successful project execution, monitoring, and control.",
    keyPoints: [
      "Plan execution strategies",
      "Progress monitoring and reporting",
      "Issue management and resolution",
      "Change management processes",
      "Quality control and assurance",
      "Performance measurement"
    ],
    resources: [
      {
        title: "Implementation Essentials for Small Projects",
        description: "Core practices that ensure successful implementation of project plans.",
        type: "text",
        link: "https://www.pmi.org/learning/library/implementation-essentials-9788",
        tags: ["Implementation", "Best practices", "Small projects"]
      },
      {
        title: "Agile Implementation Techniques",
        description: "How to use agile approaches to implement projects in changing environments.",
        type: "video",
        link: "https://www.youtube.com/watch?v=Z9QbYZh1YXY",
        tags: ["Agile", "Adaptation", "Implementation"]
      },
      {
        title: "Managing Project Issues Effectively",
        description: "Strategies for identifying and resolving issues that arise during project implementation.",
        type: "book",
        link: "https://www.amazon.com/Issue-Management-Projects-Practical-Guide/dp/1472474082",
        tags: ["Issue management", "Problem-solving", "Implementation"]
      }
    ]
  },
  "stakeholders": {
    title: "Stakeholders",
    description: "Managing stakeholder relationships",
    icon: Handshake,
    introduction: "Effective stakeholder management is critical for project success. This section covers approaches to identifying, engaging, and managing relationships with project stakeholders.",
    keyPoints: [
      "Stakeholder identification and analysis",
      "Stakeholder engagement planning",
      "Communication strategies",
      "Managing expectations",
      "Gaining and maintaining stakeholder support",
      "Conflict resolution with stakeholders"
    ],
    resources: [
      {
        title: "Stakeholder Analysis Templates",
        description: "Practical templates for identifying and analyzing project stakeholders.",
        type: "text",
        link: "https://www.projectmanagementdocs.com/stakeholder-analysis-templates",
        tags: ["Templates", "Analysis", "Planning"]
      },
      {
        title: "Effective Stakeholder Communication",
        description: "Techniques for clear, effective communication with different stakeholder groups.",
        type: "video",
        link: "https://www.youtube.com/watch?v=9yTm5vqnUHQ",
        tags: ["Communication", "Engagement", "Relationship management"]
      },
      {
        title: "Stakeholder Management for Nonprofit Projects",
        description: "Special considerations for managing stakeholders in nonprofit and charitable contexts.",
        type: "audio",
        link: "https://hbr.org/podcast/2019/07/managing-nonprofit-stakeholders",
        tags: ["Nonprofit", "Stakeholders", "Charity sector"]
      }
    ]
  },
  "methodologies": {
    title: "Methodologies",
    description: "Project management methodologies overview",
    icon: Layers,
    introduction: "Various project management methodologies offer different approaches to managing projects. This section provides an overview of methodologies and guidance on selecting the right approach for your context.",
    keyPoints: [
      "Traditional vs. agile approaches",
      "Waterfall methodology",
      "Scrum and Kanban for small teams",
      "Hybrid approaches",
      "Selecting the right methodology",
      "Scaling methodologies for organization size"
    ],
    resources: [
      {
        title: "Choosing the Right Methodology for Your Project",
        description: "A decision framework for selecting the most appropriate project management approach.",
        type: "text",
        link: "https://www.pmi.org/learning/library/methodology-selection-framework-9753",
        tags: ["Selection criteria", "Decision making", "Frameworks"]
      },
      {
        title: "Agile for Small Teams and Charities",
        description: "How to apply agile principles in small team environments and charitable organizations.",
        type: "video",
        link: "https://www.youtube.com/watch?v=502ILHjX9EE",
        tags: ["Agile", "Small teams", "Adaptation"]
      },
      {
        title: "Hybrid Project Management Approaches",
        description: "Combining elements of different methodologies to create the right approach for your context.",
        type: "book",
        link: "https://www.amazon.com/Hybrid-Project-Management-Organizations-Transformation/dp/1138731870",
        tags: ["Hybrid", "Customization", "Methodology"]
      }
    ]
  },
  "ai": {
    title: "AI",
    description: "AI applications in project management",
    icon: BrainCircuit,
    introduction: "Artificial intelligence is transforming project management practices. This section explores practical AI applications that can help small organizations enhance their project management capabilities.",
    keyPoints: [
      "AI tools for project planning and scheduling",
      "Predictive analytics for project outcomes",
      "Automation of routine project tasks",
      "AI for resource optimization",
      "Natural language processing for project documentation",
      "Accessible AI solutions for small organizations"
    ],
    resources: [
      {
        title: "AI Tools for Small Business Project Management",
        description: "Affordable and accessible AI solutions for enhancing project management in small organizations.",
        type: "text",
        link: "https://www.projectmanagement.com/articles/ai-tools-small-business",
        tags: ["AI tools", "Small business", "Technology"]
      },
      {
        title: "Getting Started with AI in Project Management",
        description: "Practical steps for incorporating AI into your project management practices.",
        type: "video",
        link: "https://www.youtube.com/watch?v=txDtsr2Kl-M",
        tags: ["Getting started", "Implementation", "Technology adoption"]
      },
      {
        title: "The Future of AI in Project Management",
        description: "Trends and future developments in AI applications for project management.",
        type: "book",
        link: "https://www.amazon.com/Future-Project-Management-Intelligence-Automation/dp/1138739654",
        tags: ["Future trends", "Innovation", "Technology"]
      }
    ]
  }
};

const topicImages: Record<string, string> = {
  teams: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  risk: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80",
  leadership: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=900&q=80",
  ethics: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  sustainability: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
  governance: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
  strategy: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80",
  planning: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  implementation: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=900&q=80",
  stakeholders: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=900&q=80",
  methodologies: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  ai: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
};

const downloadRiskRegister = () => {
  const csvContent = `Risk Description,Likelihood,Impact,Mitigation,Owner,Status
Project delays due to resource shortage,High,Medium,Allocate buffer time and cross-train staff,Project Lead,Ongoing
Budget overrun,Medium,High,Monitor expenses bi-weekly,Finance Manager,Monitoring
Supplier failure,Low,High,Have backup suppliers identified,Procurement Manager,Controlled
Scope creep,High,Medium,Document all change requests,Project Lead,Ongoing
Team turnover,Medium,Medium,Document processes and cross-train team members,HR Manager,Monitoring`;
  
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  
  link.setAttribute("href", url);
  link.setAttribute("download", "project_risk_register_template.csv");
  link.style.visibility = "hidden";
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function TopicTemplate() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicId && topicData[topicId] ? topicData[topicId] : null;

  if (!topic) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Topic Not Found</h1>
          <p>The requested topic does not exist.</p>
        </div>
      </Layout>
    );
  }

  const IconComponent = topic.icon;

  const topicMainImage = topicImages[topicId || "teams"] || topicImages["teams"];
  const topicGraphicImage = `https://source.unsplash.com/600x200/?${encodeURIComponent(topic.title + ' project')}`;

  return (
    <Layout>
      <div className="relative mb-8">
        <img
          src={topicMainImage}
          alt={topic.title + " illustration"}
          className="w-full h-60 md:h-80 object-cover rounded-lg shadow"
        />
        <div className="absolute top-4 left-4 bg-black/40 rounded-full p-2">
          <IconComponent size={40} className="text-white drop-shadow" />
        </div>
        <img
          src={topicGraphicImage}
          alt={topic.title + " themed graphic"}
          className="absolute -bottom-8 right-4 w-40 object-cover rounded-lg shadow-lg border-2 border-white hidden md:block"
          style={{ zIndex: 9 }}
        />
      </div>
      <TopicHero
        title={topic.title}
        description={topic.description}
        icon={<IconComponent size={32} className="text-white" />}
        className="mb-8 rounded-none"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-muted-foreground">{topic.introduction}</p>
        </div>

        {topicId === "risk" && (
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/31/13/13/planning-2026227_1280.png"
                alt="Risk register visual"
                className="w-32 h-32 object-contain rounded bg-white border shadow"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Risk Register (Downloadable)</h2>
                <p className="mb-2 text-muted-foreground">
                  Use this ready-made template to keep track of project risks in seconds.
                </p>
                <button
                  onClick={downloadRiskRegister}
                  className="bg-pmblue text-white px-5 py-2 rounded shadow hover:bg-pmblue-dark transition"
                >
                  Download Risk Register (CSV)
                </button>
              </div>
            </div>
            <div className="overflow-auto border rounded-lg bg-white shadow mb-2">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3 font-semibold">Risk Description</th>
                    <th className="py-2 px-3 font-semibold">Likelihood</th>
                    <th className="py-2 px-3 font-semibold">Impact</th>
                    <th className="py-2 px-3 font-semibold">Mitigation</th>
                    <th className="py-2 px-3 font-semibold">Owner</th>
                    <th className="py-2 px-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3">Project delays due to resource shortage</td>
                    <td className="py-2 px-3">High</td>
                    <td className="py-2 px-3">Medium</td>
                    <td className="py-2 px-3">Allocate buffer time and cross-train staff</td>
                    <td className="py-2 px-3">Project Lead</td>
                    <td className="py-2 px-3">Ongoing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Budget overrun</td>
                    <td className="py-2 px-3">Medium</td>
                    <td className="py-2 px-3">High</td>
                    <td className="py-2 px-3">Monitor expenses bi-weekly</td>
                    <td className="py-2 px-3">Finance Manager</td>
                    <td className="py-2 px-3">Monitoring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <Tabs defaultValue="overview" className="max-w-4xl mx-auto mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Key Topics</h2>
              <ul className="space-y-8">
                {topic.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-full bg-pmblue flex items-center justify-center text-white mr-2 flex-shrink-0 font-bold text-lg mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <span className="font-semibold block text-lg mb-2">{point}</span>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {keyTopicExplanationsSimple[topicId as string]?.[index]
                          ? keyTopicExplanationsSimple[topicId as string][index]
                          : ""}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topic.resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  link={
                    resource.link === "https://www.pmi.org/learning/library/simple-risk-management-approach-9662"
                      ? "https://www.simplilearn.com/simple-risk-management-guide-article"
                      : resource.link === "https://www.pmi.org/learning/library/leadership-skills-project-managers-need-11127"
                      ? "https://www.cio.com/article/222665/project-management-project-management-leadership-skills.html"
                      : resource.link === "https://www.pmi.org/learning/library/ethical-decision-making-framework-9602"
                      ? "https://www.projectmanager.com/blog/ethical-decision-making"
                      : resource.link === "https://www.strategyex.com/blog/project-selection-toolkit"
                      ? "https://www.smartsheet.com/strategic-project-selection"
                      : resource.link // fallback: use original if not replaced above
                  }
                  tags={resource.tags}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
