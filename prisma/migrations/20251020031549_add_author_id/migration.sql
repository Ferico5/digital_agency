/*
  Warnings:

  - Added the required column `authorId` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "authorId" TEXT NOT NULL;
