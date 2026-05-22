-- CreateEnum
CREATE TYPE "IntentLabel" AS ENUM ('HOT', 'WARM', 'NURTURE', 'COLD', 'UNCLASSIFIED');

-- CreateEnum
CREATE TYPE "HeatStatus" AS ENUM ('HOT', 'WARMING', 'STABLE', 'COOLING', 'COLD', 'DORMANT');

-- CreateEnum
CREATE TYPE "DealStage" AS ENUM ('REPLIED', 'CONTACTED', 'MEETING', 'PROPOSAL', 'NEGOTIATION', 'WON', 'LOST', 'PAUSED');

-- CreateEnum
CREATE TYPE "DealSource" AS ENUM ('INBOUND_REPLY', 'MANUAL', 'IMPORT');

-- CreateEnum
CREATE TYPE "ContactSource" AS ENUM ('CAMPAIGN_REPLY', 'MANUAL', 'IMPORT');

-- CreateEnum
CREATE TYPE "GCCRegion" AS ENUM ('INDIA', 'UAE', 'SAUDI_ARABIA', 'QATAR', 'KUWAIT', 'BAHRAIN', 'OMAN', 'OTHER');

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "fullName" TEXT,
    "company" TEXT,
    "jobTitle" TEXT,
    "phone" TEXT,
    "linkedinUrl" TEXT,
    "avatarUrl" TEXT,
    "source" "ContactSource" NOT NULL DEFAULT 'CAMPAIGN_REPLY',
    "campaignId" TEXT,
    "region" "GCCRegion" NOT NULL DEFAULT 'OTHER',
    "timezone" TEXT,
    "preferredLang" TEXT DEFAULT 'en',
    "avgReplyTimeHrs" DOUBLE PRECISION,
    "totalEmailsSent" INTEGER NOT NULL DEFAULT 0,
    "totalReplies" INTEGER NOT NULL DEFAULT 0,
    "lastContactedAt" TIMESTAMP(3),
    "lastRepliedAt" TIMESTAMP(3),
    "organisationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deals" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "stage" "DealStage" NOT NULL DEFAULT 'REPLIED',
    "source" "DealSource" NOT NULL DEFAULT 'INBOUND_REPLY',
    "value" DOUBLE PRECISION,
    "currency" TEXT DEFAULT 'AED',
    "contactId" TEXT NOT NULL,
    "campaignId" TEXT,
    "assignedRepId" TEXT,
    "signalReplySpeedScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "signalIntentScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "signalOpenCount" INTEGER NOT NULL DEFAULT 0,
    "signalOpenScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "signalProposalViews" INTEGER NOT NULL DEFAULT 0,
    "signalProposalScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "signalCalendlyBooked" BOOLEAN NOT NULL DEFAULT false,
    "signalCalendlyScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "signalThreadDepth" INTEGER NOT NULL DEFAULT 0,
    "signalThreadScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "signalForwardDetected" BOOLEAN NOT NULL DEFAULT false,
    "signalForwardScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dealScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dealScoreAt" TIMESTAMP(3),
    "intentLabel" "IntentLabel" NOT NULL DEFAULT 'UNCLASSIFIED',
    "intentConfidence" DOUBLE PRECISION,
    "intentTopics" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "buyingSignals" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "objections" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "classifiedAt" TIMESTAMP(3),
    "heatStatus" "HeatStatus" NOT NULL DEFAULT 'STABLE',
    "heatScore" DOUBLE PRECISION NOT NULL DEFAULT 50,
    "heatUpdatedAt" TIMESTAMP(3),
    "nextAction" TEXT,
    "nextActionDue" TIMESTAMP(3),
    "nextActionAt" TIMESTAMP(3),
    "isPaused" BOOLEAN NOT NULL DEFAULT false,
    "pauseReason" TEXT,
    "pausedAt" TIMESTAMP(3),
    "resumeAt" TIMESTAMP(3),
    "replyCount" INTEGER NOT NULL DEFAULT 0,
    "lastReplyAt" TIMESTAMP(3),
    "firstReplyAt" TIMESTAMP(3),
    "lastEmailSentAt" TIMESTAMP(3),
    "meetingAt" TIMESTAMP(3),
    "proposalSentAt" TIMESTAMP(3),
    "closedAt" TIMESTAMP(3),
    "organisationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "lostReason" TEXT,

    CONSTRAINT "deals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emails" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "threadId" TEXT,
    "postmarkId" TEXT,
    "fromEmail" TEXT NOT NULL,
    "fromName" TEXT,
    "toEmail" TEXT NOT NULL,
    "subject" TEXT,
    "textBody" TEXT,
    "htmlBody" TEXT,
    "direction" TEXT NOT NULL,
    "intentLabel" "IntentLabel",
    "intentConfidence" DOUBLE PRECISION,
    "topics" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "openedAt" TIMESTAMP(3),
    "openCount" INTEGER NOT NULL DEFAULT 0,
    "clickCount" INTEGER NOT NULL DEFAULT 0,
    "forwardDetected" BOOLEAN NOT NULL DEFAULT false,
    "contactId" TEXT NOT NULL,
    "dealId" TEXT,
    "organisationId" TEXT NOT NULL,
    "receivedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");

-- CreateIndex
CREATE INDEX "contacts_email_idx" ON "contacts"("email");

-- CreateIndex
CREATE INDEX "contacts_organisationId_idx" ON "contacts"("organisationId");

-- CreateIndex
CREATE INDEX "contacts_organisationId_lastRepliedAt_idx" ON "contacts"("organisationId", "lastRepliedAt");

-- CreateIndex
CREATE INDEX "contacts_region_idx" ON "contacts"("region");

-- CreateIndex
CREATE INDEX "deals_contactId_idx" ON "deals"("contactId");

-- CreateIndex
CREATE INDEX "deals_organisationId_idx" ON "deals"("organisationId");

-- CreateIndex
CREATE INDEX "deals_organisationId_stage_idx" ON "deals"("organisationId", "stage");

-- CreateIndex
CREATE INDEX "deals_organisationId_dealScore_idx" ON "deals"("organisationId", "dealScore");

-- CreateIndex
CREATE INDEX "deals_organisationId_heatStatus_idx" ON "deals"("organisationId", "heatStatus");

-- CreateIndex
CREATE INDEX "deals_assignedRepId_idx" ON "deals"("assignedRepId");

-- CreateIndex
CREATE INDEX "deals_campaignId_idx" ON "deals"("campaignId");

-- CreateIndex
CREATE INDEX "deals_createdAt_idx" ON "deals"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "emails_messageId_key" ON "emails"("messageId");

-- CreateIndex
CREATE INDEX "emails_threadId_idx" ON "emails"("threadId");

-- CreateIndex
CREATE INDEX "emails_dealId_idx" ON "emails"("dealId");

-- CreateIndex
CREATE INDEX "emails_contactId_idx" ON "emails"("contactId");

-- CreateIndex
CREATE INDEX "emails_organisationId_idx" ON "emails"("organisationId");

-- CreateIndex
CREATE INDEX "emails_messageId_idx" ON "emails"("messageId");

-- AddForeignKey
ALTER TABLE "deals" ADD CONSTRAINT "deals_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "deals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
