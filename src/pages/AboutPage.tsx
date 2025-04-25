import { Layout } from "@/components/ui/layout";
import { Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl text-white">
        <div className="flex items-center justify-center mb-8">
          <div className="h-16 w-16 rounded-full bg-pmblue/10 text-pmblue flex items-center justify-center">
            <Briefcase className="h-8 w-8" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">About This Project Management Guide</h1>
        
        <div className="prose prose-lg max-w-none prose-invert">
          <p>
            This project management guide has been created specifically for small businesses and charities operating in Ireland. 
            The goal is to provide accessible, practical resources that help organizations deliver projects more effectively, 
            with limited resources and unique constraints.
          </p>
          
          <h2>Who This Guide Is For</h2>
          <p>
            This guide is designed for:
          </p>
          <ul>
            <li>Small business owners and managers juggling multiple responsibilities</li>
            <li>Charity leaders and volunteer coordinators managing mission-driven projects</li>
            <li>Project team members looking to develop their skills and knowledge</li>
            <li>Organizations that may not have dedicated project management staff or expertise</li>
          </ul>
          
          <h2>What Makes This Guide Different</h2>
          <p>
            Unlike many project management resources that assume large teams, substantial budgets, and dedicated staff, 
            our guide acknowledges the realities of small organizations:
          </p>
          <ul>
            <li>Limited resources (time, money, expertise)</li>
            <li>Team members wearing multiple hats</li>
            <li>High reliance on volunteers (for charities)</li>
            <li>Need for practical, immediately applicable advice</li>
          </ul>
          
          <h2>How to Use This Guide</h2>
          <p>
            The guide is organized into key topic areas that represent the most important aspects of project management. 
            You can explore each area independently based on your needs:
          </p>
          <ul>
            <li><strong>Teams</strong> - Building and managing effective project teams</li>
            <li><strong>Risk</strong> - Identifying and mitigating project risks</li>
            <li><strong>Leadership</strong> - Developing project leadership skills</li>
            <li><strong>Ethics</strong> - Ethical considerations in project management</li>
            <li><strong>Sustainability</strong> - Building sustainable project practices</li>
            <li><strong>Governance</strong> - Project governance frameworks and implementation</li>
            <li><strong>Strategy</strong> - Strategic approaches to project management</li>
            <li><strong>Planning</strong> - Effective project planning techniques</li>
            <li><strong>Implementation</strong> - Successfully implementing project plans</li>
            <li><strong>Stakeholders</strong> - Managing stakeholder relationships</li>
            <li><strong>Methodologies</strong> - Project management methodologies overview</li>
            <li><strong>AI</strong> - AI applications in project management</li>
          </ul>
          
          <p>
            Each section includes a mix of resource types (written, video, audio) to accommodate different learning preferences.
          </p>
          
          <h2>About the Creator</h2>
          <p>
            This guide was created as part of an MSc in Project Management program. It represents a synthesis of academic knowledge 
            and practical business experience, with a focus on making project management principles accessible and applicable for 
            small organizations in Ireland.
          </p>
          
          <h2>Sources</h2>
          <p>
            The resources in this guide include both originally created content and carefully selected external resources from:
          </p>
          <ul>
            <li>Academic publications and research</li>
            <li>Industry best practice guides</li>
            <li>Professional project management bodies</li>
            <li>Experienced practitioners in the field</li>
          </ul>
          
          <p>
            All external resources are properly credited and referenced according to academic standards.
          </p>
        </div>
      </div>
    </Layout>
  );
}
