import { FadeIn } from "@/components/ui/FadeIn";
import { Check, MoreHorizontal, User, Mail, Send, Calendar, Clock, BarChart2, TrendingUp, Users } from "lucide-react";

export function TaskListMockup() {
  return (
    <div className="w-full bg-[#0A0A0A] rounded-xl border border-white/5 p-6 shadow-2xl overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
           <span className="text-white font-medium">Toutes les tâches</span>
           <span className="text-xs text-gray-500 bg-[#1F1F1F] px-2 py-0.5 rounded-full">En attente d&apos;approbation</span>
        </div>
        <MoreHorizontal className="text-gray-500 w-5 h-5" />
      </div>

      {/* List */}
      <div className="space-y-3">
        {[
          { title: "Post réseaux sociaux", subtitle: "Prévu pour maintenant", icon: "check", checked: false },
          { title: "Liste de prospects", subtitle: "100+ prospects", icon: "check", checked: true },
          { title: "Rappel de paiement", subtitle: "Envoyé pour factures en retard", icon: "check", checked: true },
          { title: "Gestion de la paie", subtitle: "Généré automatiquement", icon: "check", checked: true },
        ].map((item, i) => (
          <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${i === 0 ? 'bg-[#111111] border border-white/5' : 'opacity-40'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded flex items-center justify-center border ${item.checked ? 'bg-primary-purple border-primary-purple' : 'border-gray-600'}`}>
                {item.checked && <Check className="w-3 h-3 text-white" />}
              </div>
              <div>
                <div className="text-sm text-white font-medium">{item.title}</div>
                <div className="text-xs text-gray-500">{item.subtitle}</div>
              </div>
            </div>
            {i === 0 && (
               <div className="w-2 h-2 rounded-full bg-primary-purple animate-pulse"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AIChatMockup() {
  return (
    <div className="w-full bg-[#0A0A0A] rounded-xl border border-white/5 p-6 shadow-2xl relative overflow-hidden h-[300px] flex flex-col justify-end">
       {/* Chat Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary-purple/20 rounded-full blur-[50px]"></div>

       {/* Logo Center */}
       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-primary-purple to-primary-purple-dark flex items-center justify-center shadow-lg shadow-primary-purple/20">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10h-10V2z" opacity="0.5"/></svg>
          </div>
          <div className="text-white font-medium text-sm">What can I help with?</div>
          <div className="text-gray-500 text-xs text-center max-w-[200px]">Drafting emails, customer handling, or help change your system just give me command.</div>
       </div>

       {/* Input Area */}
       <div className="relative z-10 bg-[#111111] border border-white/5 rounded-lg p-3 flex items-center justify-between mt-auto">
          <span className="text-gray-500 text-sm">Schedule a 30...</span>
          <div className="w-6 h-6 rounded bg-primary-purple flex items-center justify-center">
             <Send className="w-3 h-3 text-white" />
          </div>
       </div>
    </div>
  );
}

export function SalesDashboardMockup() {
  return (
    <div className="w-full bg-[#0A0A0A] rounded-xl border border-white/5 p-6 shadow-2xl relative overflow-hidden">
       {/* Header */}
       <div className="flex items-center justify-between mb-6">
          <div className="text-white font-medium">E-mail Sending</div>
          <div className="w-2 h-2 rounded-full bg-primary-purple animate-pulse"></div>
       </div>

       {/* Tabs */}
       <div className="flex gap-2 mb-6">
          <div className="px-3 py-1 rounded-full bg-[#1F1F1F] text-xs text-white border border-white/10">LinkedIn</div>
          <div className="px-3 py-1 rounded-full bg-transparent text-xs text-gray-500 border border-white/5">IP server</div>
          <div className="px-3 py-1 rounded-full bg-transparent text-xs text-gray-500 border border-white/5">Hunters</div>
       </div>

       {/* Profile Card */}
       <div className="bg-[#111111] border border-white/5 rounded-lg p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                   <User className="w-5 h-5 text-gray-400" />
                </div>
             </div>
             <div>
                <div className="text-white text-sm font-medium">Jack Daniel</div>
                <div className="text-gray-500 text-xs">Founder</div>
             </div>
          </div>
          <div className="px-2 py-0.5 rounded bg-green-500/10 text-green-500 text-[10px] font-medium border border-green-500/20">Verified</div>
       </div>

       {/* Stats */}
       <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
             <div className="text-gray-500 text-xs mb-1">E-mail</div>
             <div className="text-white text-xs truncate">jack@gmail.com</div>
          </div>
          <div>
             <div className="text-gray-500 text-xs mb-1">Company</div>
             <div className="text-white text-xs">Retail LG</div>
          </div>
       </div>

       {/* Progress Bar */}
       <div className="relative h-1 bg-[#1F1F1F] rounded-full overflow-hidden mb-2">
          <div className="absolute top-0 left-0 h-full w-2/3 bg-primary-purple rounded-full"></div>
       </div>
       <div className="flex justify-between text-[10px] text-gray-500">
          <span>Draft</span>
          <span>Scheduled</span>
          <span>Sent</span>
       </div>
    </div>
  );
}
