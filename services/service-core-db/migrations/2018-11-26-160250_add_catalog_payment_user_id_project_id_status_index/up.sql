-- Your SQL goes here
create index if not exists idx_cat_payments_project_id_status_user_id on payment_service.catalog_payments(project_id, status, user_id);