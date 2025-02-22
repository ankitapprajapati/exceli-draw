/*
  Warnings:

  - Added the required column `senderName` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "senderName" TEXT NOT NULL;
