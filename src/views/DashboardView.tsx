import React from 'react';
import { Sparkles, Briefcase } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/common/Button';
import { OperationalSummary } from '../components/dashboard/OperationalSummary';
import { HiringPipeline } from '../components/dashboard/HiringPipeline';
import { AttentionRequired } from '../components/dashboard/AttentionRequired';
import { TopCandidates } from '../components/dashboard/TopCandidates';
import { UpcomingInterviews } from '../components/dashboard/UpcomingInterviews';
import { AIActivityPreview } from '../components/dashboard/AIActivityPreview';

export const DashboardView: React.FC = () => {
  const { settings, navigate } = useApp();

  const userFirstName = settings.profile.name ? settings.profile.name.split(' ')[0] : 'Aarav';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* 1. Header & Primary Workspace Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Good morning, {userFirstName}
          </h1>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 2 }}>
            Here's what's happening across your hiring operations.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Button
            variant="secondary"
            size="md"
            icon={<Sparkles size={14} />}
            onClick={() => navigate('sourcing')}
          >
            Run AI Sourcing
          </Button>

          <Button
            variant="primary"
            size="md"
            icon={<Briefcase size={14} />}
            onClick={() => navigate('create-job')}
          >
            Post Job
          </Button>
        </div>
      </div>

      {/* 2. Primary Operational Summary Strip */}
      <OperationalSummary />

      {/* 3. Priority 1: Active Hiring Pipeline (Visual Center) + Attention Required */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.85fr) minmax(320px, 1.15fr)',
          gap: 20,
          alignItems: 'start',
        }}
        className="dashboard-priority-1-grid"
      >
        <HiringPipeline />
        <AttentionRequired />
      </div>

      {/* 4. Priority 2: Top Matched Candidates + Upcoming Interviews */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.3fr) minmax(320px, 1.1fr)',
          gap: 20,
          alignItems: 'start',
        }}
        className="dashboard-priority-2-grid"
      >
        <TopCandidates />
        <UpcomingInterviews />
      </div>

      {/* 5. Priority 3: AI Activity & System Stream */}
      <div>
        <AIActivityPreview />
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 1100px) {
          .dashboard-priority-1-grid,
          .dashboard-priority-2-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
