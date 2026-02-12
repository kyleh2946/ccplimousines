import { contactInquiries, type InsertContactInquiry, type ContactInquiry } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [result] = await db.insert(contactInquiries).values(inquiry).returning();
    return result;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return db.select().from(contactInquiries);
  }
}

export const storage = new DatabaseStorage();
