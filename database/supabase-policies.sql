/* Enable read access for all users */
CREATE POLICY "Enable read access for all users" ON "public"."Program" AS PERMISSIVE FOR
SELECT TO public USING (true);
/* Enable read, insert, update and delete access for authenticated users only */
CREATE POLICY "Enable everything for authenticated users only" ON "public"."Program" AS PERMISSIVE FOR ALL TO authenticated WITH CHECK (auth.uid() = user_id);
;