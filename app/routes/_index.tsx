import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type V2_MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {Icon} from '@iconify/react';
import {buttonVariants} from '~/components/ui/button';
import {Badge} from '~/components/ui/badge';

export const meta: V2_MetaFunction = () => {
  return [
    {title: 'TechieAgents | AI Agent Marketplace'},
    {description: 'The marketplace for AI agents. Discover, deploy, and monetize AI agents built by developers worldwide.'},
  ];
};

export async function loader({context}: LoaderArgs) {
  const {storefront} = context;
  
  const featuredAgents = storefront.query(FEATURED_AGENTS_QUERY);
  
  return defer({featuredAgents});
}

export default function Homepage() {
  const {featuredAgents} = useLoaderData<typeof loader>();
  
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <FeaturedAgents agents={featuredAgents} />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.15),transparent)]" />
      
      <div className="container relative px-4 py-24 mx-auto max-w-7xl sm:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Announcement badge */}
          <Link 
            to="/changelog" 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm border rounded-full border-border/60 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
          >
            <Badge variant="secondary" className="text-xs">New</Badge>
            <span className="text-muted-foreground">Introducing Agent Analytics Dashboard</span>
            <Icon icon="lucide:arrow-right" className="w-3 h-3 text-muted-foreground" />
          </Link>
          
          {/* Main headline */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Marketplace for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              AI Agents
            </span>
          </h1>
          
          <p className="max-w-2xl mt-6 text-lg text-muted-foreground sm:text-xl">
            Discover, deploy, and monetize AI agents built by developers worldwide. 
            Join the community shaping the future of autonomous AI.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col gap-4 mt-10 sm:flex-row">
            <Link to="/agents" className={buttonVariants({size: 'lg'})}>
              <Icon icon="lucide:search" className="w-4 h-4 mr-2" />
              Explore Agents
            </Link>
            <Link to="/dashboard/agents/new" className={buttonVariants({variant: 'outline', size: 'lg'})}>
              <Icon icon="lucide:upload" className="w-4 h-4 mr-2" />
              Submit Your Agent
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 sm:gap-16">
            <div className="text-center">
              <p className="text-3xl font-bold sm:text-4xl">500+</p>
              <p className="mt-1 text-sm text-muted-foreground">AI Agents</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold sm:text-4xl">2.5K+</p>
              <p className="mt-1 text-sm text-muted-foreground">Engineers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold sm:text-4xl">50K+</p>
              <p className="mt-1 text-sm text-muted-foreground">Deployments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: 'lucide:bot',
      title: 'Discover Agents',
      description: 'Browse a curated marketplace of production-ready AI agents for every use case.',
    },
    {
      icon: 'lucide:code-2',
      title: 'Built for Developers',
      description: 'Full documentation, GitHub integration, and APIs designed for seamless integration.',
    },
    {
      icon: 'lucide:wallet',
      title: 'Monetize Your Work',
      description: 'Set your pricing, earn revenue, and build a sustainable business around your agents.',
    },
    {
      icon: 'lucide:users',
      title: 'Join the Community',
      description: 'Connect with AI engineers, share knowledge, and collaborate on cutting-edge projects.',
    },
    {
      icon: 'lucide:shield-check',
      title: 'Enterprise Ready',
      description: 'SOC 2 compliant, white-label options, and dedicated support for enterprise teams.',
    },
    {
      icon: 'lucide:zap',
      title: 'One-Click Deploy',
      description: 'Deploy agents instantly with built-in hosting, scaling, and monitoring.',
    },
  ];

  return (
    <section className="py-24 border-t border-border/40">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build with AI
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            From discovery to deployment, TechieAgents provides the complete platform for AI agent development.
          </p>
        </div>
        
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="relative p-6 transition-colors border rounded-lg group border-border/60 bg-card hover:border-primary/50"
            >
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary/10">
                <Icon icon={feature.icon} className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedAgents({agents}: {agents: Promise<any>}) {
  return (
    <section className="py-24 border-t border-border/40 bg-muted/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Agents</h2>
            <p className="mt-2 text-muted-foreground">Top-rated agents from our community</p>
          </div>
          <Link to="/agents" className={buttonVariants({variant: 'outline'})}>
            View All
            <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <Suspense fallback={<AgentGridSkeleton />}>
          <Await resolve={agents}>
            {(data) => {
              const products = data?.products?.nodes || [];
              if (products.length === 0) {
                return <EmptyAgentGrid />;
              }
              return (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {products.map((product: any) => (
                    <AgentCard key={product.id} agent={product} />
                  ))}
                </div>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}

function AgentCard({agent}: {agent: any}) {
  const image = agent.images?.nodes?.[0];
  
  return (
    <Link 
      to={`/agents/${agent.handle}`}
      className="group relative flex flex-col overflow-hidden border rounded-lg border-border/60 bg-card hover:border-primary/50 transition-all hover:shadow-lg"
    >
      <div className="aspect-video bg-muted flex items-center justify-center">
        {image ? (
          <img src={image.url} alt={agent.title} className="object-cover w-full h-full" />
        ) : (
          <Icon icon="lucide:bot" className="w-12 h-12 text-muted-foreground/50" />
        )}
      </div>
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            {agent.title}
          </h3>
          <Badge variant="secondary" className="shrink-0">
            {agent.priceRange?.minVariantPrice?.amount === '0.00' ? 'Free' : `$${agent.priceRange?.minVariantPrice?.amount}`}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {agent.description || 'An AI agent ready to automate your workflows.'}
        </p>
        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Icon icon="lucide:download" className="w-3 h-3" />
            1.2k
          </span>
          <span className="flex items-center gap-1">
            <Icon icon="lucide:star" className="w-3 h-3" />
            4.8
          </span>
        </div>
      </div>
    </Link>
  );
}

function AgentGridSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="overflow-hidden border rounded-lg border-border/60 bg-card animate-pulse">
          <div className="aspect-video bg-muted" />
          <div className="p-4 space-y-3">
            <div className="w-3/4 h-4 rounded bg-muted" />
            <div className="w-full h-3 rounded bg-muted" />
            <div className="w-2/3 h-3 rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyAgentGrid() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center border rounded-lg border-dashed border-border/60">
      <Icon icon="lucide:package-open" className="w-12 h-12 mb-4 text-muted-foreground/50" />
      <h3 className="text-lg font-semibold">No agents yet</h3>
      <p className="mt-1 text-sm text-muted-foreground">Be the first to submit an AI agent to the marketplace.</p>
      <Link to="/dashboard/agents/new" className={`mt-4 ${buttonVariants({size: 'sm'})}`}>
        Submit Agent
      </Link>
    </div>
  );
}

function CTASection() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.15),transparent_50%)]" />
          <div className="relative px-8 py-16 text-center sm:px-16 sm:py-24">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build the future of AI?
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-lg text-muted-foreground">
              Join thousands of engineers building, sharing, and monetizing AI agents on TechieAgents.
            </p>
            <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
              <Link to="/account/register" className={buttonVariants({size: 'lg'})}>
                Get Started Free
              </Link>
              <Link to="/enterprise" className={buttonVariants({variant: 'outline', size: 'lg'})}>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURED_AGENTS_QUERY = `#graphql
  query FeaturedAgents($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        id
        title
        handle
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          nodes {
            id
            url
            altText
            width
            height
          }
        }
      }
    }
  }
` as const;
