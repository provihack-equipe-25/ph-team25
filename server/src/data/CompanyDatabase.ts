import { Company } from "../entities/Company";
import { BaseDatabase } from "./BaseDatabase";

export class CompanyDatabase extends BaseDatabase {
  public registerCompany = async (company: Company): Promise<any> => {
    try {
      await BaseDatabase.connection("companies").insert({
        id: company.getId(),
        company_name: company.getName(),
        about: company.getAbout(),
        company_url: company.getUrl(),
        company_image: company.getImage(),
        cnpj: company.getCnpj(),
        email: company.getEmail(),
        password: company.getPassword(),
        city: company.getCity(),
        state: company.getState(),
        address: company.getAddress(),
        phone: company.getPhone(),
        contact_number: company.getContactNumber(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public findCompanyByEmail = async (email: string): Promise<any> => {
    try {
      const company = await BaseDatabase.connection("companies").where({
        email,
      });
      return company[0] && Company.companyModelConversor(company[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getCompanyIdByEmail = async (email: string): Promise<any> => {
    try {
      const company = await BaseDatabase.connection("companies")
        .select("id")
        .where({
          email,
        });

      return company[0] && Company.companyModelConversor(company[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public findCompanyByCnpj = async (cnpj: string): Promise<any> => {
    try {
      const company = await BaseDatabase.connection("companies").where({
        cnpj,
      });
      return company[0] && Company.companyModelConversor(company[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getAllCompanies = async () => {
    try {
      const companies = await BaseDatabase.connection("companies");
      const companiesArray = [];
      for (let company of companies) {
        const wastes = await BaseDatabase.connection("waste").where(
          "company_id",
          company.id
        );
        const needs = await BaseDatabase.connection("material_needs").where(
          "company_id",
          company.id
        );
        const produced = await BaseDatabase.connection(
          "material_produces"
        ).where("company_id", company.id);
        company = {
          ...company,
          wastes: wastes,
          needs: needs,
          produced: produced,
        };
        companiesArray.push(company);
      }
      return companiesArray;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getCompanyById = async (id: string): Promise<any> => {
    try {
      let company = await BaseDatabase.connection("companies").where({
        id,
      });
      const wastes = await BaseDatabase.connection("waste").where(
        "company_id",
        id
      );
      const needs = await BaseDatabase.connection("material_needs").where(
        "company_id",
        id
      );
      const produced = await BaseDatabase.connection("material_produces").where(
        "company_id",
        id
      );

      return {
        ...company[0],
        wastes: wastes,
        needs: needs,
        produced: produced,
      };
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getCompanyByWasteProduced = async (
    waste: string
  ): Promise<Company[]> => {
    try {
      const result = await BaseDatabase.connection("companies")
        .join(
          "material_produces",
          "companies.id",
          "material_produces.company_id"
        )
        .select("company_id")
        .whereILike("material_name", `%${waste}%`);

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getCompanyByMaterialNeeds = async (
    need: string
  ): Promise<Company[]> => {
    try {
      const result = await BaseDatabase.connection("companies")
        .join("material_needs", "companies.id", "material_needs.company_id")
        .select("company_id")
        .whereILike("material_name", `%${need}%`);

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public updateCompanyUrl = async (id: string, link: string): Promise<void> => {
    try {
      await BaseDatabase.connection("companies")
        .update("company_url", link)
        .where({ id });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public updateCompanyImage = async (
    id: string,
    link: string
  ): Promise<void> => {
    try {
      await BaseDatabase.connection("companies")
        .update("company_image", link)
        .where({ id });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
